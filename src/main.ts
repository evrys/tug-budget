import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

createApp(App).use(createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          gold: '#FFD700',
        }
      }
    },
    defaultTheme: 'dark'
  }
})).mount('#app')
