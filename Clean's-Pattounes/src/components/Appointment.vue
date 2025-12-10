<template>
  <div class="appointment-page">
    <div class="appointment-container">
      <h1>Réserver un rendez-vous</h1>
      <form class="appointment-form">
        <div class="form-group">
          <label for="name">Nom:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div class="form-group">
          <label for="time">Heure:</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div class="form-group">
          <label for="service">Service:</label>
          <select id="service" name="service" required>
            <option value="">Sélectionnez un service</option>
            <option value="grooming">Toilettage Complet</option>
            <option value="vet-consultation">Bain / Brush</option>
            <option value="training">Coupe</option>
          </select>
        </div>
        <button type="submit" class="btn-submit">Réserver</button>
      </form>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'AppointmentPage',
})
</script>

<style scoped>
.appointment-page {
  min-height: 100vh;
  background-color: #99b4a0;
  padding-top: 120px; /* Important : compense la navbar fixe */
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
}

.btn-submit:hover {
  background-color: #8aa391;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(153, 180, 160, 0.3);
}
</style>
