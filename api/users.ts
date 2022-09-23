import { baseUrl, authHeaders } from '../api/base'

export const fetchUser = () => {
  const user = fetch(`${baseUrl()}/api/current_user`, {
    method: "get",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
  }).then((res) => {
    return res.json()
  })

  const accessUserData = async () => {
    const data = await user;
    return data 
  };
  
  return { user: accessUserData() }
}
