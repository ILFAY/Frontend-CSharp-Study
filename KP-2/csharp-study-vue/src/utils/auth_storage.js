const TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refresh_token";
const PATH = "http://localhost:8000/api/v1/";

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  if (!refreshToken) return false;
  try {
    const response = await fetch(PATH + "auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
    if (!response.ok) return false;
    const data = await response.json();
    localStorage.setItem(TOKEN_KEY, data.access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
    return true;
  } catch {
    return false;
  }
}

export async function registerUser(name, email, password) {
  try {
    const response = await fetch(PATH + "auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({name, email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      return {ok: false, message: data.detail || "Ошибка регистрации"}
    }

    return {ok: true};
  }
  catch {
    return{ ok: false, message:"Сервер недоступен" }
  }
}


export async function loginUser(email, password) {
  try {
    const form = new FormData();
    form.append("username", email);
    form.append("password", password);

     const response = await fetch(PATH + "auth/login", {
        method: "POST",
        body: form,
    });


     if (!response.ok) {
       const data = await response.json();
       return {ok: false, message: data.detail || "Неверный email или пароль"};
     }
     const data = await response.json();
     localStorage.setItem(TOKEN_KEY, data.access_token);
     localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
     return {ok: true};
  }
  catch {
    return {ok: false, message: "Сервер недоступен"}
  }
}

export function loadToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function getAuthHeaders() {
  const token = loadToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}