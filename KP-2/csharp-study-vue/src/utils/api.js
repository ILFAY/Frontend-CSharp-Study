import { getAuthHeaders, refreshAccessToken } from "./auth_storage";

const PATH = "http://localhost:8000/api/v1/";


async function fetchWithRefresh(url, options = {}) {
  let response = await fetch(url, options);
  if (response.status === 401) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      options.headers = { ...options.headers, ...getAuthHeaders() };
      response = await fetch(url, options);
    }
  }
  return response;
}

export async function fetchCourse() {
  const response = await fetchWithRefresh(PATH + "course");
  if (!response.ok) throw new Error("Не удалось загрузить курс");
  return response.json();
}

export async function fetchCurrentUser() {
  const response = await fetchWithRefresh(PATH + "users/me", {
    headers: getAuthHeaders(),
  });
  if (!response.ok) return null;
  return response.json();
}

export async function fetchProgress() {
  const response = await fetchWithRefresh(PATH + "progress/me", {
    headers: getAuthHeaders(),
  });
  if (!response.ok) return [];
  return response.json();
}

export async function markProgress(topicId, itemId) {
  await fetchWithRefresh(PATH + "progress", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify({ topicId, itemId }),
  });
}

export async function submitAnswer(itemId, taskType, payload) {
  const response = await fetchWithRefresh(PATH + `tasks/${itemId}/submit/${taskType}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Ошибка отправки ответа");
  return response.json();
}

export async function fetchStreak() {
  const response = await fetchWithRefresh(PATH + "progress/me/daily-correct-task-streak", {
    headers: getAuthHeaders(),
  });
  if (!response.ok) return 0;
  const data = await response.json();
  return data.consecutive_days ?? 0;
}

export async function fetchXpRank() {
  const response = await fetchWithRefresh(PATH + "users/me/xp-rank", {
    headers: getAuthHeaders(),
  });
  if (!response.ok) return null;
  return response.json();
}

export async function fetchTasksProgress() {
  const response = await fetchWithRefresh(PATH + "progress/me/tasks-progress", {
    headers: getAuthHeaders(),
  });
  if (!response.ok) return null;
  return response.json();
}