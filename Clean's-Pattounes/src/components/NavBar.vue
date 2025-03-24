<template>
    <v-card>
      <v-layout>
        <v-app-bar color="#99B4A0">
          <template v-slot:prepend>
            <v-img
              :src="'/src/assets/image/Clean.png'"
              :width="'5rem'"
              :height="'4rem'"
              alt="Logo Clea's Pattounes"
            />
            <v-app-bar-title class="ml-2">Title</v-app-bar-title>

          </template>
  
          
        </v-app-bar>
      </v-layout>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  