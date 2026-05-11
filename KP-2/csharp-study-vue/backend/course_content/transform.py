"""
Функции преобразования plotCourseData → формат бэкенда (плоский список items).
Используется и в seed.py, и в автосиде при старте приложения.
"""


def transform_task(task: dict, order: int) -> dict:
    task_type = task["type"]
    item = {
        "type":     "task",
        "id":       task["id"],
        "title":    task["title"],
        "order":    order,
        "taskType": task_type,
        "npcText":  task.get("npcText", ""),
        "rewardXp": task.get("rewardXp", 0),
    }

    if task_type == "single-choice":
        item["question"]     = task.get("question", "")
        item["answers"]      = task.get("options", task.get("answers", []))
        item["correctIndex"] = task.get("correctIndex", 0)

    elif task_type == "fill-in-blank":
        item["codeTemplate"] = task.get("codeTemplate", "")
        item["blank"]        = task.get("blank", task.get("correctAnswer", ""))

    elif task_type == "find-the-bug":
        item["codeLines"]    = task.get("lines", task.get("codeLines", []))
        item["bugLineIndex"] = task.get("bugLineIndex", 0)
        item["explanation"]  = task.get("explanation", "")

    elif task_type == "code-order":
        item["description"]  = task.get("description", "")
        item["codeLines"]    = task.get("lines", task.get("codeLines", []))
        item["correctOrder"] = task.get("correctOrder", [])

    elif task_type == "match-pairs":
        item["pairs"] = [
            {"left": p["left"], "right": p["right"], "order": i}
            for i, p in enumerate(task.get("pairs", []))
        ]

    return item


def transform_topic(topic: dict, fallback_order: int) -> dict:
    items = []
    order = 0

    if "storyPage" in topic:
        sp = topic["storyPage"]
        items.append({
            "type":         "lesson",
            "id":           sp["id"],
            "title":        sp.get("title", topic["title"]),
            "order":        order,
            "theoryBlocks": sp.get("blocks", []),
        })
        order += 1

    for page in topic.get("theoryPages", []):
        items.append({
            "type":         "lesson",
            "id":           page["id"],
            "title":        page["title"],
            "order":        order,
            "theoryBlocks": page.get("blocks", []),
        })
        order += 1

    for task in topic.get("tasks", []):
        items.append(transform_task(task, order))
        order += 1

    if "finalAction" in topic:
        fa = topic["finalAction"]
        if fa.get("cutsceneBlocks"):
            items.append({
                "type":         "lesson",
                "id":           fa["id"],
                "title":        fa["title"],
                "order":        order,
                "theoryBlocks": fa["cutsceneBlocks"],
            })

    return {
        "id":    topic["id"],
        "title": topic["title"],
        "order": topic.get("order", fallback_order),
        "items": items,
    }


def transform_course(raw_topics: list[dict]) -> list[dict]:
    return [transform_topic(t, i) for i, t in enumerate(raw_topics, start=1)]
