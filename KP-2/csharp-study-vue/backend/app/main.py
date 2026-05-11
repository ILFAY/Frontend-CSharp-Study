from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from app.api.v1.routers import auth, users
from app.api.v1.routers.course import router as course_router
from app.api.v1.routers.course_admin import router as course_admin_router
from app.api.v1.routers.progress import router as progress_router
from app.api.v1.routers.tasks import router as tasks_router
from app.db.base import Base
from app.db.database import async_session, engine
import logging
import sys
import app.models

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="backslashreplace")
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler("app.log", encoding="utf-8"),
        logging.StreamHandler(),
    ],
)


async def _seed_course_if_empty() -> None:
    """Заливает PLOT_COURSE в БД, если курс ещё не загружен."""
    try:
        from course_content.plot_course import PLOT_COURSE
        from course_content.transform import transform_course
        from app.repositories.course_repository import CourseRepository
        from app.services.course_service import CourseService
    except ImportError:
        logging.getLogger(__name__).warning("plot_course.py не найден — автосид пропущен")
        return

    async with async_session() as session:
        repo = CourseRepository(session)
        topics = await repo.list_topics()
        if topics:
            logging.getLogger(__name__).info("Курс уже есть в БД (%d тем) — автосид пропущен", len(topics))
            return
        service = CourseService(repo)
        transformed = transform_course(PLOT_COURSE)
        n = await service.admin_replace_entire_course(transformed)
        logging.getLogger(__name__).info("Автосид: залито %d тем из plot_course.py", n)


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    await _seed_course_if_empty()
    yield


app = FastAPI(
    title="Learning Platform API",
    description="Изучение C#",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
    lifespan=lifespan,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth.router, prefix="/api/v1")
app.include_router(users.router, prefix="/api/v1")
app.include_router(course_router, prefix="/api/v1")
app.include_router(course_admin_router, prefix="/api/v1")
app.include_router(progress_router, prefix="/api/v1")
app.include_router(tasks_router, prefix="/api/v1")


@app.get("/", include_in_schema=False)
async def root():
    return RedirectResponse(url="/docs")


@app.get("/health")
async def health():
    return {"status": "ok"}
