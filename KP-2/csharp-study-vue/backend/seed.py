"""
Заливает PLOT_COURSE из plot_course.py в БД через /course/admin/replace-entire-course.

Запуск:
    py -3.11 seed.py
"""

import asyncio
import base64
import aiohttp

from course_content.plot_course import PLOT_COURSE
from course_content.transform import transform_course

BASE = "http://localhost:8000/api/v1/course/admin"
CREDENTIALS = base64.b64encode(b"course-admin@localhost:change-me").decode()
BASIC_HEADERS = {"Authorization": f"Basic {CREDENTIALS}"}


async def seed():
    topics = transform_course(PLOT_COURSE)
    total_items = sum(len(t["items"]) for t in topics)
    print(f"Подготовлено: {len(topics)} тем, {total_items} элементов")

    async with aiohttp.ClientSession() as session:
        print("Отправляю на /course/admin/replace-entire-course ...")
        async with session.post(
            f"{BASE}/replace-entire-course",
            json={"topics": topics},
            headers=BASIC_HEADERS,
        ) as r:
            if r.status == 200:
                data = await r.json()
                print(f"✓ Готово! Тем загружено: {data.get('topicsLoaded', '?')}")
            else:
                text = await r.text()
                print(f"✗ Ошибка {r.status}:\n{text[:400]}")


asyncio.run(seed())
