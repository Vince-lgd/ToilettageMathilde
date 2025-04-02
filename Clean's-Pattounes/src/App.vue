<template>
  <div id="app" class="app-container">
    <NavBar /> <!-- Votre barre de navigation -->
    <router-view /> <!-- Affichage des pages selon la route -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
