<template>
  <div>
    <Navigation />
    <div class="bg-gray-100 py-8">
      <!-- <div class="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" placeholder="Search for a country...">
      </div>-->
      <CountryList />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  async fetch ({ store, error }) {
    try {
      await store.dispatch('countries/fetchCountries')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
        error
      })
    }
  }
}
</script>

<style>
/* Sample `apply` animation-timing-function: rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
