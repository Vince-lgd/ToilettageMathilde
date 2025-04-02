<template>
  <v-card>
    <v-layout>
      <v-app-bar color="#99B4A0" :height="100" sticky>
        <template v-slot:prepend>
          <div class="logo-container">
            <v-img
              :src="'/src/assets/image/Clean.png'"
              class="logo"
              alt="Logo Clea's Pattounes"
            />
          </div>
          <div class="title-container">
            <v-app-bar-title class="title ml-8">Accueil</v-app-bar-title>

            <!-- Lien cliquable avec router-link -->
            <router-link to="/presentation">
              <span class="title link-text">Présentation</span>
            </router-link>

            <v-app-bar-title class="title">Prestations</v-app-bar-title>
          </div>
        </template>

        <template v-slot:append>
          <v-btn rounded="xl" style="font-weight: bold;" class="btn-rdv">Prendre rdv</v-btn>
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

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 140px !important;
  object-fit: contain;
}

.title-container {
  display: flex;
  gap: 20rem;
}

.title {
  font-size: 1.25rem;
}

.link-text {
  cursor: pointer;
  text-decoration: none;
}

.v-app-bar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2000; /* S'assurer que la navbar est au-dessus */
}
</style>
