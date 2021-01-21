import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import CountryList from '@/components/CountryList.vue'
import CountryItem from '@/components/CountryItem.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('CountryList.vue', () => {
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = {
      getters: {
        displayCountries: jest.fn()
      },
      actions: {
        fetchListCountries: jest.fn(() => Promise.resolve())
      }
    }

    store = new Vuex.Store(storeOptions)
  })

  test('renders a Country with data for each country in displayCountries', async () => {
    const $bar = {
      start: () => {},
      finish: () => {}
    }

    const countries = [{}, {}, {}]

    storeOptions.getters['countries/displayCountries'].mockReturnValue(countries)

    const wrapper = shallowMount(CountryList, {
      mocks: { $bar },
      localVue,
      store
    })

    const Countries = wrapper.findAllComponents(CountryItem)

    expect(Countries).toHaveLength(countries.length)

    Countries.wrappers.forEach((wrapper, i) => {
      expect(wrapper.vm.data).toBe(items[i])
    })
  })
})