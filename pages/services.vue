<template>
  <div class="bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <!-- Services Hero Section -->
    <section class="relative  py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
            Our Services
          </h1>
          <p class="mt-4 text-xl text-gray-200">
            Range of services to help you on your journey 
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(service, index) in services" :key="index" class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div class="p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <span class="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <UIcon :name="service.icon" class="h-6 w-6" />
                  </span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ service.title }}</h3>
                </div>
              </div>
              <p class="mt-4 text-base text-gray-500 dark:text-gray-400">{{ service.description }}</p>
              <div class="mt-6">
                <UButton
                  color="primary"
                  variant="ghost"
                  @click="openModal(service.component)"
                >
                  Learn more
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-primary-500">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span class="block">Ready to get started?</span>
          <span class="block text-primary-100">Contact us today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <UButton
              to="/contact"
              color="white"
              size="lg"
            >
              Get in touch
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Modals -->

    <Teleport to="body">
      <TransformationStudyModal v-if="activeModal === 'TransformationStudyModal'" @close="closeModal" />
      <TechnologyConsultingModal v-if="activeModal === 'TechnologyConsultingModal'" @close="closeModal" />
      <BusinessConsultingModal v-if="activeModal === 'BusinessConsultingModal'" @close="closeModal" />
      <CloudSolutionsModal v-if="activeModal === 'CloudSolutionsModal'" @close="closeModal" />
      <SoftwareDevelopmentModal v-if="activeModal === 'SoftwareDevelopmentModal'" @close="closeModal" />
      <UiUxDesignModal v-if="activeModal === 'UiUxDesignModal'" @close="closeModal" />
    </Teleport>
  </div>
</template>

<script setup>
import TransformationStudyModal from '@/components/services/TransformationStudyModal.vue'
import TechnologyConsultingModal from '@/components/services/TechnologyConsultingModal.vue'
import BusinessConsultingModal from '@/components/services/BusinessConsultingModal.vue'
import CloudSolutionsModal from '@/components/services/CloudSolutionsModal.vue'
import SoftwareDevelopmentModal from '@/components/services/SoftwareDevelopmentModal.vue'
import UiUxDesignModal from '@/components/services/UiUxDesignModal.vue'

// SEO Meta Tags
useHead({
  title: 'Services - Business Transformation & Technology Solutions',
  meta: [
    { name: 'description', content: 'business transformation, technology consulting, cloud solutions, software development, and UI/UX design. digital transformation journey in Malaysia.' },
    { name: 'keywords', content: 'IT services Malaysia, business transformation, technology consulting, cloud solutions, software development, UI/UX design, digital transformation, web development, mobile apps, Kuala Lumpur IT company' },
    { property: 'og:title', content: 'Our Services - Tunjang Jaya Graftek | IT Solutions Malaysia' },
    { property: 'og:description', content: 'Comprehensive IT services including business transformation, technology consulting, cloud solutions, software development, and UI/UX design.' },
    { property: 'og:image', content: 'https://tunjangjaya.com/images/indexbackground.jpg' },
    { property: 'og:url', content: 'https://tunjangjaya.com/services' },
    { name: 'twitter:title', content: 'Our Services - Tunjang Jaya Graftek | IT Solutions Malaysia' },
    { name: 'twitter:description', content: 'Comprehensive IT services including business transformation, technology consulting, cloud solutions, software development, and UI/UX design.' },
    { name: 'twitter:image', content: 'https://tunjangjaya.com/images/indexbackground.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://tunjangjaya.com/services' }
  ]
})

// Structured Data for Services
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "IT Services and Business Transformation",
        "description": "Comprehensive IT services including business transformation, technology consulting, cloud solutions, software development, and UI/UX design.",
        "provider": {
          "@type": "Organization",
          "name": "Tunjang Jaya Graftek Sdn Bhd",
          "url": "https://tunjangjaya.com"
        },
        "serviceType": "Information Technology Services",
        "areaServed": {
          "@type": "Country",
          "name": "Malaysia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Transformation Study",
                "description": "Expert team collaboration to identify challenges, develop strategic roadmaps, and implement transformative solutions."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technology Consulting",
                "description": "Deep technical expertise to help organizations navigate and implement the right technologies."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Consulting",
                "description": "Strategic planning, process optimization, and effective change management for sustainable growth."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Solutions",
                "description": "Seamless cloud migration, scalable solutions, cost optimization, and enhanced security."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Software Development",
                "description": "Custom web, mobile, and desktop solutions tailored to unique business needs."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design",
                "description": "User-centered design principles to create intuitive, engaging digital experiences."
              }
            }
          ]
        }
      })
    }
  ]
})

const activeModal = ref(null)

const openModal = (component) => {
  console.log(component)
  activeModal.value = component
}

const closeModal = () => {
  activeModal.value = null
}

const services = [
  {
    title: 'Transformation Study',
    description: 'Our expert team collaborates with your organization to identify challenges, develop strategic roadmaps, and implement transformative solutions.',
    icon: 'i-heroicons-briefcase',
    component: 'TransformationStudyModal'
  },
  {
    title: 'Technology Consulting',
    description: 'Our deep technical expertise helps organizations navigate and implement the right technologies to drive efficiency, innovation, and competitive advantage.',
    icon: 'i-heroicons-cog-8-tooth',
    component: 'TechnologyConsultingModal'
  },
  {
    title: 'Business Consulting',
    description: 'We help organizations navigate complex business transformations through strategic planning, process optimization, and effective change management to achieve sustainable growth and operational excellence.',
    icon: 'i-heroicons-chart-bar',
    component: 'BusinessConsultingModal'
  },
  {
    title: 'Cloud Solutions',
    description: 'We guide organizations through seamless cloud migration, leveraging our expertise to architect scalable solutions, optimize costs, and enhance security while ensuring business continuity.',
    icon: 'i-heroicons-cloud',
    component: 'CloudSolutionsModal'
  },
  {
    title: 'Software Development',
    description: 'Leveraging our global network of expert developers, we deliver custom web, mobile, and desktop solutions tailored to your unique business needs, ensuring scalable and innovative software that drives your success.',
    icon: 'i-heroicons-device-phone-mobile',
    component: 'SoftwareDevelopmentModal'
  },
  {
    title: 'UI/UX Design',
    description: 'Our expert designers combine deep software development knowledge with user-centered design principles to create intuitive, engaging digital experiences that drive user satisfaction and business success.',
    icon: 'i-heroicons-paint-brush',
    component: 'UiUxDesignModal'
  }
]
</script>