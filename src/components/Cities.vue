<script setup>
defineProps({
})
</script>

<template>
    <nav>
      <RouterLink class="box" :to="{ name: 'city-view', params: {city: 'Tokyo'} }">Tokyo</RouterLink>
      <RouterLink class="box" :to="{ name: 'city-view', params: {city: 'Yokohama'} }">Yokohama</RouterLink>
      <RouterLink class="box" :to="{ name: 'city-view', params: {city: 'Kyoto'} }">Kyoto</RouterLink>
      <RouterLink class="box" :to="{ name: 'city-view', params: {city: 'Osaka'} }">Osaka</RouterLink>
      <RouterLink class="box" :to="{ name: 'city-view', params: {city: 'Sapporo'} }">Sapporo</RouterLink>
      <RouterLink class="box" :to="{ name: 'about'}">About</RouterLink>
    </nav>
</template>


<style scoped>
.box {
    width: 23.5rem;
    height: 3rem;
    padding-top: .5rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0  10rem;
  margin: 2rem 0;
  border: 5px solid var(--color-border);
}

@media (min-width: 1024px) {

}
</style>
