<template>
  <div>
    <UModal v-model="isOpen">
      <div class="p-6">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
          Web Development Services
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900">Modern Web Solutions</h3>
            <p class="mt-2 text-gray-500">
              We build scalable, secure, and high-performance web applications using cutting-edge technologies. Our development process is focused on delivering solutions that meet your business needs while ensuring the best user experience.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900">Our Expertise</h3>
            <div class="mt-4 space-y-3">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p class="ml-3 text-gray-500">Custom web applications tailored to your specific requirements</p>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p class="ml-3 text-gray-500">E-commerce platforms with secure payment processing</p>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p class="ml-3 text-gray-500">Content management systems for easy website maintenance</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900">Technologies We Use</h3>
            <div class="mt-4 grid grid-cols-2 gap-4">
              <div v-for="tech in technologies" :key="tech.name" class="flex items-center">
                <UIcon :name="tech.icon" class="h-6 w-6 text-gray-600" />
                <span class="ml-2 text-gray-900">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900">Our Process</h3>
            <div class="mt-4 space-y-3">
              <div v-for="(step, index) in process" :key="index" class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm">
                  {{ index + 1 }}
                </div>
                <div class="ml-3">
                  <h4 class="text-gray-900 font-medium">{{ step.title }}</h4>
                  <p class="text-sm text-gray-500">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end space-x-4">
            <UButton
              color="gray"
              @click="isOpen = false"
            >
              Close
            </UButton>
            <UButton
              to="/contact"
              color="primary"
            >
              Get in touch
            </UButton>
          </div>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const technologies = [
  {
    name: 'Vue.js',
    description: 'Progressive JavaScript framework for building user interfaces',
    icon: 'i-logos-vue'
  },
  {
    name: 'Nuxt.js',
    description: 'Vue.js framework for server-side rendered applications', 
    icon: 'i-logos-nuxt-icon'
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime for building scalable network applications',
    icon: 'i-logos-nodejs-icon'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    icon: 'i-logos-tailwindcss-icon'
  }
]

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your requirements and business goals'
  },
  {
    title: 'Planning', 
    description: 'Creating a detailed project roadmap and architecture'
  },
  {
    title: 'Development',
    description: 'Building your solution with clean, maintainable code'
  },
  {
    title: 'Testing',
    description: 'Rigorous testing to ensure quality and performance'
  },
  {
    title: 'Deployment',
    description: 'Smooth deployment and launch of your application'
  }
]
</script>