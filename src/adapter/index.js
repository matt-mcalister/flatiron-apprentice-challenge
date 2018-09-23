import { OPTIONS, BASE_URL } from "./constants"

export const getUserProfile = (username) => {
  return fetch(BASE_URL + `/users/${username}`, OPTIONS).then(res => res.json())
}
