<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Business Consulting
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            Strategic guidance to transform your business
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
              Expert Business Guidance
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              We provide strategic consulting services to help businesses optimize operations, improve efficiency, and achieve sustainable growth. Our experienced consultants work closely with you to develop tailored solutions for your unique challenges.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-check-circle" class="h-6 w-6 text-primary-500" />
                </div>
                <p class="ml-3 text-base text-gray-500">
                  Strategic planning and business transformation
                </p>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-check-circle" class="h-6 w-6 text-primary-500" />
                </div>
                <p class="ml-3 text-base text-gray-500">
                  Process optimization and efficiency improvement
                </p>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-check-circle" class="h-6 w-6 text-primary-500" />
                </div>
                <p class="ml-3 text-base text-gray-500">
                  Digital transformation and technology integration
                </p>
              </div>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
              <img
                class="object-cover"
                src="/images/services/consulting.jpg"
                alt="Business Consulting"
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
            Our Consulting Services
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Comprehensive solutions for your business challenges
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

    <!-- Approach Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Our Consulting Approach
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            A proven methodology for delivering results
          </p>
        </div>

        <div class="mt-10">
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-between">
              <div v-for="(step, index) in approach" :key="index" class="flex flex-col items-center">
                <div class="flex items-center justify-center h-12 w-12 rounded-full bg-primary-500 text-white">
                  {{ index + 1 }}
                </div>
                <h3 class="mt-4 text-lg font-medium text-gray-900">{{ step.title }}</h3>
                <p class="mt-2 text-base text-gray-500 text-center">{{ step.description }}</p>
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
          <span class="block">Ready to transform your business?</span>
          <span class="block text-primary-100">Let's discuss your goals.</span>
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
    title: 'Strategic Planning',
    description: 'Develop comprehensive business strategies aligned with your goals and market opportunities.',
    icon: 'i-heroicons-presentation-chart-line'
  },
  {
    title: 'Process Optimization',
    description: 'Streamline operations and improve efficiency through process analysis and optimization.',
    icon: 'i-heroicons-cog'
  },
  {
    title: 'Digital Transformation',
    description: 'Guide your business through digital transformation initiatives and technology adoption.',
    icon: 'i-heroicons-computer-desktop'
  },
  {
    title: 'Change Management',
    description: 'Support organizational change and ensure smooth transitions during transformation.',
    icon: 'i-heroicons-arrows-right-left'
  },
  {
    title: 'Performance Improvement',
    description: 'Identify and implement improvements to enhance business performance and productivity.',
    icon: 'i-heroicons-chart-bar'
  },
  {
    title: 'Risk Management',
    description: 'Develop strategies to identify, assess, and mitigate business risks effectively.',
    icon: 'i-heroicons-shield-check'
  }
]

const approach = [
  {
    title: 'Assessment',
    description: 'Analyze current state and identify opportunities'
  },
  {
    title: 'Strategy',
    description: 'Develop tailored solutions and action plans'
  },
  {
    title: 'Implementation',
    description: 'Execute strategies with clear milestones'
  },
  {
    title: 'Monitoring',
    description: 'Track progress and measure results'
  },
  {
    title: 'Optimization',
    description: 'Refine and improve based on outcomes'
  }
]
</script> 