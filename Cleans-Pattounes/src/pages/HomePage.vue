<template>
  <div class="full-page">
    <div class="home">
      <div class="row">
        <div class="col-left">
          <h1 class="text-h1 font-weight-bold">Bienvenue chez Clean's Pattounes</h1>
          <p class="text-h4 mt-10">Un salon chaleureux et convivial</p>
        </div>

        <div class="col-right">
          <img :src="cockerImage" alt="Cocker Spaniel" class="cocker-image" />
        </div>
      </div>
    </div>

    <div class="description-wrapper">
      <div class="description">
        <div class="row">
          <div class="col space">
            <h1 class="text-h3 font-weight-bold mt-12">Présentation</h1>
            <p class="mt-4 w-50">
              Bienvenue chez Clean Pattouns, le soin et le bien-être de vos animaux avant tout !
              Nous sommes une équipe passionnée et dévouée à offrir le meilleur pour vos compagnons
              à quatre pattes. Nous savons à quel point vos animaux sont précieux et nous nous
              engageons à leur fournir des soins de toilettage adaptés à leurs besoins spécifiques
              dans un cadre calme et sécurisé.
            </p>
            <button class="btn-savoir-plus">
              En savoir plus
              <span class="ml-2">→</span>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col space">
            <h1 class="text-h3 font-weight-bold mt-12">Prestation</h1>
            <p class="mt-4 w-50">
              Bienvenue chez Clean Pattouns, le soin et le bien-être de vos animaux avant tout !
              Nous sommes une équipe passionnée et dévouée à offrir le meilleur pour vos compagnons
              à quatre pattes. Nous savons à quel point vos animaux sont précieux et nous nous
              engageons à leur fournir des soins de toilettage adaptés à leurs besoins spécifiques
              dans un cadre calme et sécurisé.
            </p>
            <button class="btn-savoir-plus">
              En savoir plus
              <span class="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cockerImage from '@/assets/image/cocker-spaniel-anglais.jpg'

defineOptions({
  name: 'HomePage',
})
</script>

<style scoped>
.full-page {
  background-color: #99b4a0;
  min-height: 100vh;
}

.description-wrapper {
  background-color: white;
  border-radius: 30px 30px 0 0;
  position: relative;
  z-index: 1;
}

.description {
  background-color: transparent;
  padding: 0 48px;
}

.space {
  margin-top: 4rem;
}

.home {
  min-height: 80vh;
  padding-top: 120px;
  padding: 120px 48px 0 48px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.col-left {
  flex: 1;
  max-width: 50%;
}

.col-right {
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: flex-end;
}

.cocker-image {
  max-width: 800px;
  width: 100%;
  border-radius: 12px;
  object-fit: contain;
}

.text-h1 {
  font-size: 3.5rem;
  line-height: 1.2;
}

.text-h4 {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

.text-h3 {
  font-size: 2rem;
}

.font-weight-bold {
  font-weight: 700;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-12 {
  margin-top: 3rem;
}

.w-50 {
  max-width: 50%;
}

.btn-savoir-plus {
  margin-top: 2rem;
  padding: 12px 32px;
  border-radius: 24px;
  background-color: #99b4a0;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-savoir-plus:hover {
  background-color: #8aa391;
  transform: translateY(-2px);
}

.ml-2 {
  margin-left: 0.5rem;
}
</style>
