import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: number, page: string) {
    return apiClient.get('/events?_limit=' + perPage + '/_page=' + page)
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id)
  }
}
