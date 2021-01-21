import Vue from 'vue'
import Vuex from 'vuex'

import config from './config'

Vue.use(Vuex)

export default {
  store: new Vuex.Store(config)
}
