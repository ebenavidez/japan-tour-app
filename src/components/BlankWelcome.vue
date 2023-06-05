<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #greetings>Hello</template> 
    I'm E. <br>
    <p>Welcome to Japan Tour App.</p>
    <p>Please choose a city to see the weather and the places you could visit.</p>
  </WelcomeItem>
</template>
