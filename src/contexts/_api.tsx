import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ctjam.com.br/api',
})

export default api
