<script setup>
import { ref, onMounted, watch } from 'vue'
import WeatherCard from '../components/WeatherCard.vue'

const props = defineProps({
  city: {
    required: true,
  }
})

</script>

<template>
  <WeatherCard :city="city"/>
</template>

<style>

</style>