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
            <router-link to="/">
              <span class="title link-text ml-8">Accueil</span>
            </router-link>
            <router-link to="/presentation">
              <span class="title link-text">Présentation</span>
            </router-link>
            <router-link to="/services">
              <span class="title link-text">Prestations</span>
            </router-link>
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
  z-index: 2000; 
}

.router-link-exact-active,
.router-link-active {
  color: inherit !important; 
  text-decoration: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
