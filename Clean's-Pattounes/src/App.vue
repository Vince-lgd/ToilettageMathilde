<template>
  <div id="app" class="app-container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './pages/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>
