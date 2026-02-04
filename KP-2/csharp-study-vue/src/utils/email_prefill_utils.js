const EMAIL_KEY = "prefillEmail";

export function saveEmail(email) {
  localStorage.setItem(EMAIL_KEY, email);
}

export function loadEmail() {
  return localStorage.getItem(EMAIL_KEY) || "";
}

export function clearEmail() {
  localStorage.removeItem(EMAIL_KEY);
}
