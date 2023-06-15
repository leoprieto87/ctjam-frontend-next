import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:21041',
})

export default api
