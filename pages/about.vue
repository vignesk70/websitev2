<template>
  <div class="bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <!-- About Hero Section -->
    <section class="relative py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="motion-enter text-4xl font-extrabold text-white sm:text-5xl">
            About Us
          </h1>
          <p class="motion-enter motion-delay-1 mt-4 text-xl text-gray-200">
            Learn more about our company and our mission
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story Section -->
    <section class="py-12 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div v-reveal>
            <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white">
              Our Story
            </h2>
           
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
              We are a team of experienced professionals who have collectively more than 100 years of experience in the IT industry. From developing software solutions, 
              designing and implementing IT infrastructure, developed and deployed large scale systems to private and public sectors to providing consultancy services, we have the expertise to help you achieve your business goals. Our experience
              spans across various industries, including banking, insurance, telecommunications, government, plantation and more.
            </p>
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
              We believe in creating lasting partnerships with our clients, understanding their unique challenges, and delivering solutions that drive real business value.
            </p>
          </div>
          <div class="mt-8 lg:mt-0" v-reveal="{ delay: 120 }">
            <div class="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg hover-lift">
              <!-- https://unsplash.com/photos/men-sitting-in-front-of-their-laptop-computer-MChSQHxGZrQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash -->
              <img
                class="h-[26rem] w-full object-cover transition-transform duration-700 hover:scale-105"
                src="/images/about-company.jpg"
                alt="Company office"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-12 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center" v-reveal>
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white">
            Our Values
          </h2>
          <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
            The principles that guide everything we do
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(value, index) in values" :key="index" v-reveal="{ delay: index * 90 }" class="group pt-6">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8 hover-lift dark:bg-gray-800">
                <div class="-mt-6">
                  <div>
                    <span class="hover-tilt-icon inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg shadow-primary-500/20 dark:bg-primary-600">
                      <UIcon :name="value.icon" class="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{{ value.title }}</h3>
                  <p class="mt-5 text-base text-gray-500 dark:text-gray-400">{{ value.description }}</p>
                </div>
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
  title: 'About Us - Expert IT Team with 100+ Years Experience',
  meta: [
    { name: 'description', content: '100 years combined experience in software development, IT infrastructure, and business transformation across various industries in Malaysia.' },
    { name: 'keywords', content: 'about Tunjang Jaya Graftek, IT team Malaysia, experienced software developers, IT infrastructure experts, business transformation consultants, Kuala Lumpur IT company' },
    { property: 'og:title', content: 'About Us - Tunjang Jaya Graftek | Expert IT Team Malaysia' },
    { property: 'og:description', content: 'Meet our experienced IT team with over 100 years combined experience in software development, IT infrastructure, and business transformation.' },
    { property: 'og:image', content: 'https://tunjangjaya.com/images/about-company.jpg' },
    { property: 'og:url', content: 'https://tunjangjaya.com/about' },
    { name: 'twitter:title', content: 'About Us - Tunjang Jaya Graftek | Expert IT Team Malaysia' },
    { name: 'twitter:description', content: 'Meet our experienced IT team with over 100 years combined experience in software development, IT infrastructure, and business transformation.' },
    { name: 'twitter:image', content: 'https://tunjangjaya.com/images/about-company.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://tunjangjaya.com/about' }
  ]
})

// Structured Data for About Page
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Tunjang Jaya Graftek",
        "description": "Learn about our experienced IT team with over 100 years combined experience in software development, IT infrastructure, and business transformation.",
        "url": "https://tunjangjaya.com/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Tunjang Jaya Graftek Sdn Bhd",
          "description": "We are a team of experienced professionals who have collectively more than 100 years of experience in the IT industry.",
          "foundingDate": "2019",
          "numberOfEmployees": "10-50",
          "industry": "Information Technology",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Suite 33-01, Jalan Bukit Bintang",
            "addressLocality": "Kuala Lumpur",
            "postalCode": "50470",
            "addressCountry": "MY"
          }
        }
      })
    }
  ]
})

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.',
    icon: 'i-heroicons-light-bulb'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency in all our dealings.',
    icon: 'i-heroicons-shield-check'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from the smallest detail to the biggest project.',
    icon: 'i-heroicons-star'
  },
  {
    title: 'Simplicity',
    description: 'We believe in the power of simplicity to achieve great results.',
    icon: 'i-heroicons-users'
  }
]
</script>
