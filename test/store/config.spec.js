jest.mock('@/services/countries')

import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import flushPromises from 'flush-promises'
import storeConfig from '@/store/config'
import request from '@/services/axios'
import { getCountries } from '@/services/countries'

const localVue = createLocalVue()

localVue.use(Vuex)

function createCountries () {
  const arr = new Array(22)
  return arr.fill().map((item, i) => ({ id: `c${i}`, name: 'item'}))
}

describe('store-config', () => {
  test('dispatching fetchCountries updates displayCountries getter', async () => {
    expect.assertions(1)

    const countries = createCountries()
    const clonedStoreConfig = cloneDeep(storeConfig)
    const store = new Vuex.Store(clonedStoreConfig)

    console.log(getCountries)

    getCountries.mockImplementation(() => (Promise.resolve(countries)))

    store.dispatch('countries/fetchCountries')

    await flushPromises()

    expect(store.getters['countries/displayCountries']).toEqual(countries.slice(0, 20))
  })
})