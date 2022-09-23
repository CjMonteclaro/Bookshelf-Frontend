import { baseUrl } from '../api/base'

export const loginRequest = (formData: React.FormEvent<HTMLInputElement>) => {
  fetch(`${baseUrl()}/api/auth/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.username,
      password: formData.password,
    }),
  }).then((res) => {
    res.json().then(function(data) {
      localStorage.setItem("token", data.token)
    })
  })
}

export const registerRequest = (formData: React.FormEvent<HTMLInputElement>) => {
  fetch(`${baseUrl()}/api/auth/signup`, {
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
    res.json().then(function(data) {
      localStorage.setItem("token", data.token)
    })
  })
}

