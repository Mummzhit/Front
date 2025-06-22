
export async function fetchProfile() {
    const token = sessionStorage.getItem('ACCESS_TOKEN');
    const response = await fetch('http://localhost:8080/api/profile', {
        headers: { 'Authorization': token }
    });
    return response.json();
}

async function refreshTokens(accessToken, refreshToken) {
  const response = await fetch('http://localhost:8080/api/refresh-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accessToken, refreshToken }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to refresh tokens');
  }

  return response.json();  // 새 토큰 쌍이 담긴 객체
}


// 로그인 페이지 API 관리
export async function login(email, password) {
    console.log('로그인 요청:', { email, password });

    const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('로그인 실패');

    const data = await response.json();

    console.log('로그인 응답 토큰:', data.accessToken);

    return data;
  }


// 회원가입 페이지 API 관리
export async function signUp(email, password, nickname) {
  const response = await fetch('http://localhost:8080/api/auth/signup', {  
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

// 프로필 페이지 API 관리
export async function getProfile() {
  const token = sessionStorage.getItem('ACCESS_TOKEN');
  console.log('프로필 요청 시 토큰:', token);

  const response = await fetch('http://localhost:8080/api/profile', {
    method: 'GET',
    headers: {
      'Authorization': token, 
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) throw new Error('프로필 불러오기 실패');
  return response.json();
}
