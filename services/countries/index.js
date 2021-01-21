import request from '@/services/axios'

export default {
  getCountries () {
    const resource = '/all'
    return request({ method: 'GET', url: resource })
  }
}
