// 이메일 정규식 검사
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 닉네임 최소 2자 이상
export function isValidNickname(nickname) {
  return nickname.length >= 2;
}

// 비밀번호 최소 8자 이상
export function isValidPassword(password) {
  return password.length >= 8;
}
