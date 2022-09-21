import router from 'next/router'
import { baseUrl, authHeaders } from 'pages/api/base'

export const loginRequest = (formData: React.FormEvent<HTMLInputElement>) => {
  fetch(`${baseUrl()}/api/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: formData.username,
        password: formData.password,
      },
    }),
  }).then((res) => {
      localStorage.setItem("token", res.headers.get("Authorization"))
      router.push("/discover")
  })
}

export const registerRequest = (formData: React.FormEvent<HTMLInputElement>) => {
  fetch(`${baseUrl()}/api/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: formData.username,
        password: formData.password,
        email: formData.email,
      },
    }),
  }).then((res) => {
      localStorage.setItem("token", res.headers.get("Authorization"))
      router.push("/discover")
  })
}

export const logoutRequest = () => {
  fetch(`${baseUrl()}/api/logout`, {
    method: "delete",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
  }).then((res) => {
      localStorage.setItem("token", "");
      router.push("/")
  })
}
