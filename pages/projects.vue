<template>
  <div class="bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <!-- Projects Hero Section -->
    <section class="relative  py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
            Our Projects
          </h1>
          <p class="mt-4 text-xl text-gray-200">
            Explore our successful projects and case studies
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter Categories -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <UButton
            v-for="category in categories"
            :key="category.id"
            :color="selectedCategory === category.id ? 'primary' : 'neutral'"
            variant="subtle"
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
          </UButton>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <div class="aspect-w-16 aspect-h-9">
              <img
                :src="project.image"
                :alt="project.title"
                class="object-cover w-full h-48"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ project.title }}</h3>
                <UBadge :color="project.category.color">{{ project.category.name }}</UBadge>
              </div>
              <p class="mt-2 text-gray-500 dark:text-gray-400">{{ project.description }}</p>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <UIcon
                    v-for="tech in project.technologies"
                    :key="tech"
                    :name="tech"
                    class="h-5 w-5 text-gray-400 dark:text-gray-500"
                  />
                </div>
                <!-- <UButton
                  :to="project.link"
                  color="primary"
                  variant="ghost"
                >
                  View Details
                </UButton> -->
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
          <span class="block">Ready to start your project?</span>
          <span class="block text-primary-100">Let's work together.</span>
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
const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ai', name: 'Gen AI' },
  { id: 'logistics', name: 'Logistics' }
]

const projects = [
  { 
    id: 1,
    title: 'NFC / QR Contact Management System',
    description: 'Create an online profile and share it with your contacts via NFC or QR code. Keep track of your contacts and their details.',
    image: '/images/projects/nfc.jpg',
    category: { id: 'web', name: 'Web Development', color: 'blue' },
    technologies: ['i-logos-python', 'i-logos-bootstrap'],
    link: '/projects/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Plantation R&D Management System',
    description: 'A system to manage the R&D data of a plantation. Using Neo4j as the database for complex relationships.',
    image: '/images/projects/plantation.jpg',
    category: { id: 'mobile', name: 'Mobile Apps', color: 'green' },
    technologies: ['i-logos-python', 'i-logos-react', 'i-logos-nodejs-icon', 'i-simple-icons-neo4j'],
    link: '/projects/mobile-plantation'
  },
  {
    id: 3,
    title: 'End to End Logistics System',
    description: 'Managing the end to end logistics of a company. From the order, delivery, tracking, inventory and production consumption. AI suggestion for planning optimization.',
    image: '/images/projects/logistics.jpg', //Photo by Albin Berlin: https://www.pexels.com/photo/black-sail-ship-on-body-of-water-906982/
    category: { id: 'logistics', name: 'Web Development', color: 'purple' },
    technologies: ['i-logos-nodejs-icon', 'i-simple-icons-neo4j', 'i-logos-python', 'i-logos-react'],
    link: '/projects/corporate-redesign'
  },
  {
    id: 4,
    title: 'Car Club Management System',
    description: 'Member management system for a car club. Manage the members, cars, payments,events, and dealer network integration.',
    image: '/images/projects/carclub.png',
    category: { id: 'web', name: 'Web Development', color: 'orange' },
    technologies: ['i-logos-google-analytics', 'i-logos-python', 'i-logos-django',],
    link: '/projects/marketing-campaign'
  },
  {
    id: 5,
    title: 'Healthcare Management System',
    description: 'Integrated healthcare management system for hospitals deployed globally.',
    image: '/images/projects/healthcare.jpg', //Photo by Pixabay: https://www.pexels.com/photo/close-up-photo-of-a-stethoscope-40568/
    category: { id: 'web', name: 'Web Development', color: 'blue' },
    technologies: ['i-skill-icons-dotnet'],
    link: '/projects/healthcare-system'
  },
  {
    id: 6,
    title: 'Enterprise AI Chatbot',
    description: 'Custom AI chatbot for enterprise use. Integrate with your existing data and systems.',
    image: '/images/projects/aichatbot.jpg', //Photo by Markus Winkler: https://www.pexels.com/photo/chatgpt-spelled-with-wooden-letter-tiles-on-table-30869075/
    category: { id: 'ai', name: 'Web Development', color: 'green' },
    technologies: ['i-logos-nodejs-icon', 'i-logos-wordpress-icon'],
    link: '/projects/fitness-app'
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category.id === selectedCategory.value)
})
</script> 