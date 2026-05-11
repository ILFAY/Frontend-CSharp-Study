

export function seedMockProgress() {
  const progress = {
    "topic-1": ["variables-intro", "data-types", "task-types"],
    "topic-2": ["if-else", "logical-operators", "task-if-fill", "switch", "ternary", "task-conditions-order", "task-conditions-bug"],
    "topic-3": ["for-loop", "task-for-order"],
    "topic-4": [],
    "topic-5": [],
  };

  localStorage.setItem("progress", JSON.stringify(progress));
  console.log("Mock progress seeded!");
}
