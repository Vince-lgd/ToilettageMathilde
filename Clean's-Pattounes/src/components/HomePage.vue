<template>
    <div class="full-page">
      <NavBar />
      <div class="home">     
      <div class="content">
        <h1>Votre toiletteur des Landes</h1>
        <p>Un salon spécialisé sur toutes races de chiens et de chats</p>
      </div>
      <div class="img">
        <v-img
              :src="'/src/assets/image/cocker-spaniel-anglais.jpg'"
              class="logo"
              alt="Logo Clea's Pattounes"
            />
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import NavBar from './NavBar.vue'
  </script>
  
  <style scoped>
  .full-page {
  background-color: #99B4A0;
  min-height: 100vh; /* Assure que toute la page est couverte */
}

.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 120px; 
}

.img {
  width: 50rem;
  max-width: 100%; 
}

.v-img {
  width: 100%;
  height: auto;
}

  </style>
  