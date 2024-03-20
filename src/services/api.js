import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9bc97d58da1f0b8d49ba82c230740ce8',
    language: 'pt-br',
    page: 1
  }
})

export default api
