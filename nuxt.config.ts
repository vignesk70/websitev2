// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-nodemailer', '@nuxtjs/sitemap'],
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
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tunjang Jaya Graftek - Business Transformation & Technology Solutions',
      titleTemplate: '%s | Tunjang Jaya Graftek',
      meta: [
        { name: 'description', content: 'Leading IT solutions provider in Malaysia. Business transformation, technology consulting, cloud solutions, and software development services for digital growth.' },
        { name: 'keywords', content: 'business transformation, technology consulting, cloud solutions, software development, IT services Malaysia, digital transformation, web development, mobile apps' },
        { name: 'author', content: 'Tunjang Jaya Graftek Sdn Bhd' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Tunjang Jaya Graftek' },
        { property: 'og:locale', content: 'en_MY' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@tunjangjaya' },
        { name: 'geo.region', content: 'MY' },
        { name: 'geo.placename', content: 'Kuala Lumpur' },
        { name: 'geo.position', content: '3.1390;101.6869' },
        { name: 'ICBM', content: '3.1390, 101.6869' }
      ],
      link: [
        { rel: 'canonical', href: 'https://tunjangjaya.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  sitemap: {
    hostname: 'https://tunjangjaya.com',
    gzip: true,
    routes: [
      '/',
      '/about',
      '/services',
      '/services/transformation-study',
      '/services/technology-consulting',
      '/services/business-consulting',
      '/services/cloud-solutions',
      '/services/software-development',
      '/services/ui-ux-design',
      '/projects',
      '/contact'
    ]
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://tunjangjaya.com',
      siteName: 'Tunjang Jaya Graftek',
      siteDescription: 'Leading provider of business transformation, technology consulting, cloud solutions, and software development services in Malaysia.'
    }
  }
})
