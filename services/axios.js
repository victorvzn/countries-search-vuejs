import axios from 'axios'

const baseURL = process.env.endPoint + process.env.endPointVersion
const headers = { Accept: 'application/json', 'Content-Type': 'application/json' }
const withCredentials = false

const instance = axios.create({
  baseURL,
  headers,
  withCredentials: true
  // timeout: 0,
  // maxRedirects: 0
})

export default instance
