import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const namespaced = true

const state = () => ({
  countries: []
})

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}