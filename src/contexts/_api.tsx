import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ctjam.com.br:21097',
})

export default api
