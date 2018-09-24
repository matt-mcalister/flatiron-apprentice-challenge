import { API_KEY } from "./keys"

const HEADERS = {
  "Authorization": `token ${API_KEY}`,
  "Accept": "application/json",
}

export const OPTIONS = {
  headers: HEADERS,
}

export const BASE_URL = "https://api.github.com"
