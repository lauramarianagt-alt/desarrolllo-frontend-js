export const USERNAME_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX = /^.{6,}$/;

export function validateUsername(username) {
  return USERNAME_REGEX.test(username);
}

export function validatePassword(password) {
  return PASSWORD_REGEX.test(password);
}