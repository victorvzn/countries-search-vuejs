import countries from './countries'

const isDevelopment = (
  process.env.NODE_ENV !== 'production' &&
  process.env.NODE_ENV !== 'dev' &&
  process.env.NODE_ENV !== 'pre'
)

const strict = isDevelopment

const state = () => ({
  isDevelopment
})

const modules = {
  countries
}

export default {
  strict,
  state,
  modules
}
