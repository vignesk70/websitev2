// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-nodemailer'],
  css: ['~/assets/css/tailwind.css'],
  nodemailer: {
    transport: {
      host: 'smtp.zoho.com',
      port: 465,
      auth: {
        user: 'info@tunjangjaya.com', 
        pass: 'DARBJx20FS5S'
      }
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
})
