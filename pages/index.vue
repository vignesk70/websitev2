<template>
  <div class="relative bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="motion-float absolute left-[8%] top-20 h-40 w-40 rounded-full bg-white/8 blur-3xl"></div>
      <div class="motion-float absolute right-[10%] top-28 h-52 w-52 rounded-full bg-primary-500/16 blur-3xl" style="animation-delay: 0.9s"></div>
    </div>
    <!-- Hero Section -->
    <section class="relative bg-opacity-50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="motion-enter text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            <span class="block text-neutral-300">Welcome to</span>
            <span class="block text-white">Tunjang Jaya Graftek</span>
          </h1>
          <p class="motion-enter motion-delay-1 mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Our focus is to provide innovative solutions to transfrom your business. Improve productivity, security and efficiency.
          </p>
          <div class="motion-enter motion-delay-2 mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <UButton
                to="/contact"
                color="primary"
                size="lg"
                class="interactive-button"
              >
                Get Started
              </UButton>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <UButton
                to="/services"
                color="neutral"
                variant="subtle"
                size="lg"
                class="interactive-button"
              >
                Learn More
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center" v-reveal>
          <h2 class="text-base text-primary-500 dark:text-primary-400 font-semibold tracking-wide uppercase">Features</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Your partner in business transformation
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Our comprehensive solutions are designed to digitalize your business and succeed in today's competitive market.
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div v-for="(feature, index) in features" :key="index" v-reveal="{ delay: index * 90 }" class="group relative rounded-2xl border border-transparent p-5 hover-lift hover:border-primary-500/20">
              <div class="hover-tilt-icon absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 dark:bg-primary-600 text-white shadow-lg shadow-primary-500/20">
                <UIcon :name="feature.icon" class="h-6 w-6" />
              </div>
              <div class="ml-16">
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">{{ feature.title }}</h3>
                <p class="mt-2 text-base text-gray-500 dark:text-gray-400">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta Tags
useHead({
  title: 'Home - Business Transformation & Technology Solutions',
  meta: [
    { name: 'description', content: 'Leading provider of business transformation, technology consulting, cloud solutions, and software development services in Malaysia.' },
    { name: 'keywords', content: 'business transformation Malaysia, technology consulting Kuala Lumpur, cloud solutions, software development, digital transformation, IT services, web development, mobile apps' },
    { property: 'og:title', content: 'Tunjang Jaya Graftek - Business Transformation & Technology Solutions' },
    { property: 'og:description', content: 'Transform your business with expert technology consulting, cloud solutions, and software development services in Malaysia.' },
    { property: 'og:image', content: 'https://tunjangjaya.com/images/indexbackground.jpg' },
    { property: 'og:url', content: 'https://tunjangjaya.com' },
    { name: 'twitter:title', content: 'Tunjang Jaya Graftek - Business Transformation & Technology Solutions' },
    { name: 'twitter:description', content: 'Transform your business with expert technology consulting, cloud solutions, and software development services in Malaysia.' },
    { name: 'twitter:image', content: 'https://tunjangjaya.com/images/indexbackground.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://tunjangjaya.com' }
  ]
})

// Structured Data for Organization
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Tunjang Jaya Graftek Sdn Bhd",
        "alternateName": "Tunjang Jaya Graftek",
        "url": "https://tunjangjaya.com",
        "logo": "https://tunjangjaya.com/images/logo.png",
        "description": "Leading provider of business transformation, technology consulting, cloud solutions, and software development services in Malaysia.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 33-01, Jalan Bukit Bintang",
          "addressLocality": "Kuala Lumpur",
          "postalCode": "50470",
          "addressCountry": "MY"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+6018-3445471",
          "contactType": "customer service",
          "email": "info@tunjangjaya.com"
        },
        "sameAs": [
          "https://www.linkedin.com/company/tunjang-jaya-graftek"
        ],
        "foundingDate": "2019",
        "numberOfEmployees": "10-50",
        "industry": "Information Technology",
        "services": [
          "Business Transformation",
          "Technology Consulting",
          "Cloud Solutions",
          "Software Development",
          "UI/UX Design",
          "Digital Transformation"
        ]
      })
    }
  ]
})

const features = [
  {
    title: 'Professional Services',
    description: 'Expert solutions tailored to your specific business needs.',
    icon: 'i-heroicons-briefcase'
  },
  {
    title: 'Technology Consulting',
    description: 'We help you navigate the digital landscape and make informed decisions.',
    icon: 'i-heroicons-phone'
  },
  {
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology and approaches to solve complex problems.',
    icon: 'i-heroicons-light-bulb'
  },
  {
    title: 'Connected Globally',
    description: 'Extensive network and resources to support your growth.',
    icon: 'i-heroicons-globe-alt'
  }
]
</script>
