<template>
  <div class="appointment-page">
    <div class="appointment-container">
      <h1>Réserver un rendez-vous</h1>
      <form class="appointment-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="lastName">Nom<span class="required">*</span> </label>
          <input type="text" id="lastName" v-model="formData.lastName" required />
        </div>

        <div class="form-group">
          <label for="firstName">Prénom<span class="required">*</span> </label>
          <input type="text" id="firstName" v-model="formData.firstName" required />
        </div>

        <div class="form-group">
          <label for="email">Email<span class="required">*</span> </label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>

        <div class="form-group">
          <label for="petName">Prénom de l'animal</label>
          <input type="text" id="petName" v-model="formData.petName" />
        </div>

        <div class="form-group">
          <label for="date">Date<span class="required">*</span> </label>
          <input type="date" id="date" v-model="formData.date" required />
        </div>

        <div class="form-group">
          <label for="time">Heure<span class="required">*</span> </label>
          <input type="time" id="time" v-model="formData.time" required />
        </div>

        <div class="form-group">
          <label for="service">Service<span class="required">*</span> </label>
          <select id="service" v-model="formData.service" required>
            <option value="">{{ selectService.placeholder }}</option>
            <option
              v-for="service in selectService.options"
              :key="service.value"
              :value="service.value"
            >
              {{ service.label }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="size">Taille de l'animal<span class="required">*</span> </label>
          <select id="size" v-model="formData.size" required>
            <option value="">{{ selectSize.placeholder }}</option>
            <option v-for="size in selectSize.options" :key="size.value" :value="size.value">
              {{ size.label }}
            </option>
          </select>
        </div>

        <button type="submit" class="btn-submit">
          Réserver
          <span class="mdi mdi-arrow-right ml-2"></span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'AppointmentPage',
})

const formData = ref({
  lastName: '',
  firstName: '',
  email: '',
  petName: '',
  date: '',
  time: '',
  service: '',
  size: '',
})

const selectService = ref({
  placeholder: 'Sélectionnez un service',
  options: [
    { value: 'complete', label: 'Toilettage Complet' },
    { value: 'bath', label: 'Bain / Brush' },
    { value: 'cut', label: 'Coupe' },
  ],
})

const selectSize = ref({
  placeholder: 'Sélectionnez une taille',
  options: [
    { value: 'small', label: "Petit chien (jusqu'à 10kg)" },
    { value: 'medium', label: 'Chien Moyen (10 - 25kg)' },
    { value: 'large', label: 'Grand chien (plus de 25kg)' },
  ],
})

const handleSubmit = () => {
  console.log('Données du formulaire:', formData.value)
  // Ici vous pourrez envoyer les données à votre backend
  alert('Rendez-vous réservé avec succès !')
}
</script>

<style scoped>
.appointment-page {
  min-height: 100vh;
  background-color: #99b4a0;
  padding-top: 120px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.appointment-container {
  background-color: white;
  border-radius: 20px;
  padding: 48px;
  max-width: 600px;
  width: 100%;
  margin: 0 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
}

.appointment-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 600;
  color: #333;
  font-size: 1rem;
}

.required {
  color: #e74c3c;
  margin-left: 4px;
  font-weight: bold;
}

input,
select {
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

input:focus,
select:focus {
  outline: none;
  border-color: #99b4a0;
}

select {
  cursor: pointer;
  background-color: white;
}

.btn-submit {
  margin-top: 16px;
  padding: 14px 32px;
  background-color: #99b4a0;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-submit:hover {
  background-color: #8aa391;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(153, 180, 160, 0.3);
}

.btn-submit:hover .mdi {
  transform: translateX(4px);
}

.mdi {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.ml-2 {
  margin-left: 0.5rem;
}
</style>
