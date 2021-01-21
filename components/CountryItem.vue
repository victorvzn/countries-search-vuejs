<template>
  <div class="w-auto rounded-sm shadow bg-white">
    <img class="rounded-t-md inset-0 w-full h-32 object-cover object-center" :src="data.flag">
    <div class="pt-3 pb-8 px-4">
      <h2 class="py-3 text-md font-bold">{{ data.name }}</h2>
      <p>
        <span class="font-bold">Population:</span> {{ data.population }}
      </p>
      <p>
        <span class="font-bold">Region:</span> {{ data.region }}
      </p>
      <p>
        <span class="font-bold">Capital:</span> {{ data.capital }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>