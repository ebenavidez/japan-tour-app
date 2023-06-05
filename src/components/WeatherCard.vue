<script setup>
import { ref, onMounted, watch } from 'vue'
import WeatherService from '../services/WeatherService'

const props = defineProps({
  city: {
    required: false,
  }
})

const report = ref(null);
const icon = ref("04n");

onMounted(()=>{
  WeatherService.getCurrentWeather(props.city)
  .then((response) => {
    report.value = response.data.data[0].report
    icon.value = 'http://openweathermap.org/img/w/' +  response.data.data[0].report.weather.icon +'.png'
  })
  .catch((e) => {
    console.log(e)
  })
})

watch(() => props.city, (selection, prevSelection) => { 
  WeatherService.getCurrentWeather(props.city)
  .then((response) => {
    report.value = response.data.data[0].report
    icon.value = 'http://openweathermap.org/img/w/' +  response.data.data[0].report.weather.icon +'.png'
  })
  .catch((e) => {
    console.log(e)
  })
})
</script>

<template>
  <div class="card">
    <h2>{{ this.city }}</h2>
    <h3>{{ report != null ? report.weather.main : "Default"}}<span>{{ report != null ? report.temp.tempMin : "Default"}}&deg; {{ report != null ? report.temp.tempMax : "Default"}}&deg; <span class="dot">•</span> {{ report != null ? report.temp.humidity : "Default"}}</span></h3>
    <h1>{{ report != null ? report.temp.temp : "Default"}}&deg;</h1>
    <img :src="icon" class="icon" >
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
html,
body {
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
}

.card {
    margin: 0 auto;
    margin-right: 0;
    padding: 5px 30px;
    width: 290px;
    height: 300px;
    border-radius: 3px;
    background-color: transparent;
    box-shadow: 1px 2px 10px var(--color-text);
    -webkit-animation: open 2s cubic-bezier(.39, 0, .38, 1);
}

@-webkit-keyframes open {
    from {
        padding: 0 30px;
        height: 0;
    }
    to {
        height: 300px;
    }
}

h1,
h2,
h3,
h4 {
  position: relative;
}

h1 {
  padding-top: 30px;
}

h1 {
    float: right;
    color: var(--color-text);
    font-weight: 300;
    font-size: 4em;
    line-height: .2em;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .2s;
}

h2 {
    font-weight: 300;
    font-size: 2.25em;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1);
}

h3 {
    float: left;
    margin-right: 33px;
    color: var(--color-text);
    font-weight: 400;
    font-size: 1em;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .1s;
}

span {
    margin-left: 24px;
    color: var(--color-text);
    font-weight: 300;
}

span span {
    margin-left: 0;
}

.dot {
    font-size: .9em;
}

.icon {
    position: relative;
    margin-top: 50px;
    width: 120px;
    height: 120px;
}

</style>