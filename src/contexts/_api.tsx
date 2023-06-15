import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ctjam.com.br:21041',
})

export default api
