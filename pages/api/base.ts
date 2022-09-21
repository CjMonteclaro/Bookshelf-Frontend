const baseUrl = () => process.env.NEXT_PUBLIC_API

const authHeaders = () => {
  const token = localStorage.getItem("token")
  return { Authorization: token }
}

export { baseUrl, authHeaders }
