import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ctjam.com.br:21062',
})

export default api
