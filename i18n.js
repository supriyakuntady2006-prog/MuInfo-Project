import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: 'MuInfo — Museum Companion',
      gallery: 'Gallery',
      identify: 'Identify',
      about: 'About',
      captured: 'Captured image',
      identify_success: 'Match found',
      no_camera: 'Camera not available',
      loading: 'Loading...'
    }
  },
  es: {
    translation: {
      title: 'MuInfo — Compañero del Museo',
      gallery: 'Galería',
      identify: 'Identificar',
      about: 'Acerca de',
      captured: 'Imagen capturada',
      identify_success: 'Coincidencia encontrada',
      no_camera: 'Cámara no disponible',
      loading: 'Cargando...'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
