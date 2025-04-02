<template>
    <v-container fluid class="full-page pa-0">
      <NavBar />
      <v-container class="home">

      </v-container>
    </v-container>
    
    <v-container>
      <v-row>
        <v-col class="space">
          <h1 class="text-h3 font-weight-bold mt-12">Présentation</h1>
          <p class="mt-4 w-50">Bienvenue chez Clean Pattouns, le soin et le bien-être de vos animaux avant tout !
            Nous sommes une équipe passionnée et dévouée à offrir le meilleur pour vos compagnons à quatre pattes. Nous savons à quel point vos animaux sont précieux et nous nous engageons à leur fournir des soins de toilettage adaptés à leurs besoins spécifiques dans un cadre calme et sécurisé.</p>
            <v-btn
              class="text-none text-subtitle-1 mt-8"
              color="#99B4A0"
              rounded="xl">
              En savoir plus
              <v-icon class="ml-2" right>mdi-arrow-right</v-icon>
            </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="space">
          <h1 class="text-h3 font-weight-bold mt-12">Prestation</h1>
          <p class="mt-4 w-50">Bienvenue chez Clean Pattouns, le soin et le bien-être de vos animaux avant tout !
            Nous sommes une équipe passionnée et dévouée à offrir le meilleur pour vos compagnons à quatre pattes. Nous savons à quel point vos animaux sont précieux et nous nous engageons à leur fournir des soins de toilettage adaptés à leurs besoins spécifiques dans un cadre calme et sécurisé.</p>
            <v-btn
              class="text-none text-subtitle-1 mt-8"
              color="#99B4A0"
              rounded="xl">
              En savoir plus
              <v-icon class="ml-2" right>mdi-arrow-right</v-icon>
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import NavBar from './NavBar.vue'
  </script>
  
  <style scoped>
  .full-page {
    background-color: #99B4A0;
    min-height: 100vh;
  }
  .space {
    margin-top: 4rem;
  }
  
  .home {
    min-height: 80vh;
    padding-top: 120px;
    position: relative;
    z-index: 1;
  }
  </style>
  