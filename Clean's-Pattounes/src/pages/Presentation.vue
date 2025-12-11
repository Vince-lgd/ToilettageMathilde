<template>
    <v-container fluid class="top-page pa-4">
      <v-row align="center" justify="space-between">
        <v-col cols="12" class="space">
          <p class="text-h5 w-50">Je suis Mathilde. Passionnée par le bien-être animal, j'ai décidé de créer Clean's Pattounes pour offrir un service de qualité à tous les propriétaires d'animaux qui souhaitent prendre soin de leurs compagnons tout en leur offrant une expérience agréable.</p>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-img
            :src="mathilde"
            alt="Mathilde"
            max-width="200"
            class="rounded-lg image-under-navbar"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="bottom-page pa-0">
      <v-row align="center" justify="space-between">
        <v-col cols="12">
          <v-img
            :src="mathilde"
            alt="Mathilde"
            max-width="200"
            class="rounded-lg image-under-navbar"
            contain
          />
        </v-col>
        <v-col cols="12" class="space d-flex justify-end">
          <p class="text-h5 w-25">Situé dans les landes, on se situe à telle addresses, nous avons un epartie toilettage et une partie accessoires, jeux, soins </p>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script setup>
  import mathilde from '@/assets/image/mathilde.png'

  
  </script>
  
  <style scoped>
  .top-page {
  background-color: #ffffff;
  min-height: 100vh;
  }
  .bottom-page {
  background-color: #99B4A0;
  }

  .space {
    margin-top: 10rem;
  }
  
  .home {
    min-height: 80vh;
    padding-top: 120px;
    position: relative;
    z-index: 1;
  }
  </style>
  