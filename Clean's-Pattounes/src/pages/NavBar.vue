<template>
  <header class="navbar-header">
    <div class="navbar-content">
      <div class="navbar-left">
        <router-link to="/">
          <div class="logo-container">
            <img src="/src/assets/image/Clean.png" class="logo" alt="Logo Clea's Pattounes" />
          </div>
        </router-link>
        <div class="title-container">
          <router-link to="/">
            <span class="title link-text">Accueil</span>
          </router-link>

          <router-link to="/presentation">
            <span class="title link-text">Présentation</span>
          </router-link>

          <router-link to="/services">
            <span class="title link-text">Prestations</span>
          </router-link>
        </div>
      </div>

      <div class="navbar-right">
        <router-link to="/appointments">
          <button class="btn-rdv">
            Réserver
            <span class="mdi mdi-arrow-right ml-2"></span>
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
defineOptions({
  name: 'NavBar',
})
</script>

<style scoped>
.navbar-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #99b4a0;
  z-index: 10000;
  display: flex;
  align-items: center;
  padding: 0 48px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 100px;
  height: auto;
  object-fit: contain;
}

.title-container {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #000;
  transition: opacity 0.3s ease;
}

.link-text {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.link-text:hover .title {
  opacity: 0.7;
}

.btn-rdv {
  padding: 14px 36px;
  border-radius: 24px;
  background-color: #99b4a0;
  color: #333;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px rgb(73, 73, 73);
}

.btn-rdv:hover {
  background-color: #99b4a0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.router-link-exact-active .title,
.router-link-active .title {
  font-weight: 700;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
