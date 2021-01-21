<template>
  <div class="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-4 gap-12">
      <CountryItem
        v-for="(country, index) in displayCountries"
        :key="index"
        :data="country" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CountryList',
  computed: {
    ...mapGetters({
      'displayCountries': 'countries/displayCountries',
    })
  }
}
</script>