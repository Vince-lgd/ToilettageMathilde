import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Router
import router from './router'

// Créer l'instance Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#99B4A0',
          secondary: '#8aa391'
        }
      }
    }
  }
})

// Créer et monter l'application
const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
