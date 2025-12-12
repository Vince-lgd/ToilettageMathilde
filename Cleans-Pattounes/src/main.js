import { createApp } from 'vue'
import App from './App.vue'

// Importer Vuetify et les composants nécessaires
import { createVuetify } from 'vuetify'
import 'vuetify/styles'  // Importer les styles de Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Importer les icônes Material Design

import router from './router';

// Importer les composants que tu veux utiliser
import { VBtn, VCard, VLayout, VAppBar, VImg, VIcon, VContainer, VRow, VCol, VMain, VAppBarNavIcon } from 'vuetify/components'

// Créer l'instance Vuetify
const vuetify = createVuetify({
  components: {
    VBtn,
    VCard,
    VLayout,
    VAppBar,
    VImg,
    VIcon,
    VContainer,
    VRow,
    VCol,
    VMain,
    VAppBarNavIcon
  },
  icons: {
    iconfont: 'mdi', // Utiliser les icônes MDI
  }
})

const app = createApp(App)
app.use(router); // Ajouter Vue Router ici
app.use(vuetify)  // Utiliser Vuetify dans l'application Vue

app.mount('#app')
