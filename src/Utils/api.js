
export async function fetchProfile() {
    const token = sessionStorage.getItem('ACCESS_TOKEN');
    const response = await fetch('/api/profile', {
        headers: { 'Authorization': token }
    });
    return response.json();
}

// 로그인 페이지 API 관리
export async function login(email, password) {
    const response = await fetch('**API 주소 입력 여기다 해주세요-히히', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('로그인 실패');

    return response.json();
}


// 회원가입 페이지 API 관리
export async function signUp(email, password, nickname) {
  const response = await fetch('http://your-api-url/sign-up', {  // ← 실제 주소로 교체
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, nickname }),
  });

  if (!response.ok) {
    if (response.status === 409) {
      throw new Error('이미 존재하는 이메일이나 닉네임입니다.');
    } else {
      throw new Error('회원가입 실패');
    }
  }

  return response.json();
}
