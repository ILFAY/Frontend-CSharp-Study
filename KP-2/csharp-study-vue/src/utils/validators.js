export function isValidEmail(rawString) {
    const value = String(rawString).trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  export function isValidPassword(password) {
    return password.length >= 6;
  }
  
  