import { fetchProgress } from "./api";

let cache = {};

export async function syncProgress() {
  try {
    const data = await fetchProgress();
    cache = {};
    for (const [topicId, itemIds] of Object.entries(data)) {
      cache[topicId] = itemIds;
    }
  } catch {}
}

export function isCompleted(topicId, itemId) {
  return !!(cache[topicId] && cache[topicId].includes(itemId));
}

export function getTopicProgress(topicId, items) {
  const doneIds = cache[topicId] || [];
  const done = doneIds.length;
  const total = items.length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  return { done, total, percent };
}

export function markLocalCompleted(topicId, itemId) {
  if (!cache[topicId]) cache[topicId] = [];
  if (!cache[topicId].includes(itemId)) {
    cache[topicId].push(itemId);
  }
}