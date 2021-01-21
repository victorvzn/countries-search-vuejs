import getCountries from '@/services/countries/index'

export default {
  fetchCountries ({ commit }) {
    return getCountries.getCountries()
      .then(response => {
        console.log('response', response)
        commit('SET_COUNTRIES', response.data)
      })
  }
}
