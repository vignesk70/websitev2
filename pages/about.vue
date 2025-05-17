<template>
  <div class="bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <!-- About Hero Section -->
    <section class="relative  py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
            About Us
          </h1>
          <p class="mt-4 text-xl text-gray-200 ">
            Learn more about our company and our mission
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900">
              Our Story
            </h2>
           
            <p class="mt-4 text-lg text-gray-500">
              We are a team of experienced professionals who have collectively more than 100 years of experience in the IT industry. From developing software solutions, 
              designing and implementing IT infrastructure, developed and deployed large scale systems to private and public sectors to providing consultancy services, we have the expertise to help you achieve your business goals. Our experience
              spans across various industries, including banking, insurance, telecommunications, government, plantation and more.
            </p>
            <p class="mt-4 text-lg text-gray-500">
              We believe in creating lasting partnerships with our clients, understanding their unique challenges, and delivering solutions that drive real business value.
            </p>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
              <!-- https://unsplash.com/photos/men-sitting-in-front-of-their-laptop-computer-MChSQHxGZrQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash -->
              <img
                class="h-[26rem] w-full object-cover"
                src="/images/about-company.jpg"
                alt="Company office"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Our Values
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            The principles that guide everything we do
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(value, index) in values" :key="index" class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                      <UIcon :name="value.icon" class="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ value.title }}</h3>
                  <p class="mt-5 text-base text-gray-500">{{ value.description }}</p>
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