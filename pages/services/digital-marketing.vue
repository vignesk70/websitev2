<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Digital Marketing
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            Strategic digital solutions to grow your online presence
          </p>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900">
              Comprehensive Digital Marketing
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              We help businesses increase their online visibility, generate leads, and drive conversions through strategic digital marketing campaigns. Our data-driven approach ensures measurable results and ROI.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-check-circle" class="h-6 w-6 text-primary-500" />
                </div>
                <p class="ml-3 text-base text-gray-500">
                  Search Engine Optimization (SEO) to improve visibility
                </p>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-check-circle" class="h-6 w-6 text-primary-500" />
                </div>
                <p class="ml-3 text-base text-gray-500">
                  Social Media Marketing and Management
                </p>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-check-circle" class="h-6 w-6 text-primary-500" />
                </div>
                <p class="ml-3 text-base text-gray-500">
                  Pay-Per-Click (PPC) Advertising Campaigns
                </p>
              </div>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
              <img
                class="object-cover"
                src="/images/services/digital-marketing.jpg"
                alt="Digital Marketing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Our Digital Marketing Services
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Comprehensive solutions to boost your online presence
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="service in services" :key="service.title" class="bg-gray-50 rounded-lg p-6">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <UIcon :name="service.icon" class="h-6 w-6" />
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">{{ service.title }}</h3>
              <p class="mt-2 text-base text-gray-500">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Our Results
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Real results for our clients
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-4xl font-extrabold text-primary-500">{{ stat.value }}</div>
              <div class="mt-2 text-base text-gray-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-primary-500">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span class="block">Ready to grow your business?</span>
          <span class="block text-primary-100">Let's create your digital marketing strategy.</span>
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
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Improve your website visibility and organic traffic through strategic SEO practices.',
    icon: 'i-heroicons-magnifying-glass'
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build brand awareness across social platforms.',
    icon: 'i-heroicons-chat-bubble-left-right'
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable content that attracts and converts your target audience.',
    icon: 'i-heroicons-document-text'
  },
  {
    title: 'PPC Advertising',
    description: 'Drive targeted traffic and conversions through paid advertising campaigns.',
    icon: 'i-heroicons-currency-dollar'
  },
  {
    title: 'Email Marketing',
    description: 'Nurture leads and maintain customer relationships through email campaigns.',
    icon: 'i-heroicons-envelope'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Track and analyze campaign performance to optimize your marketing efforts.',
    icon: 'i-heroicons-chart-bar'
  }
]

const stats = [
  { value: '200%', label: 'Average ROI Increase' },
  { value: '50K+', label: 'Leads Generated' },
  { value: '300%', label: 'Traffic Growth' },
  { value: '95%', label: 'Client Satisfaction' }
]
</script> 