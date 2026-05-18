<template>
  <div class="bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <section class="relative py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
            Privacy Policies
          </h1>
          <p class="mt-4 text-xl text-gray-200">
            Choose the policy that applies to your interaction with Tunjang Jaya Graftek.
          </p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2">
          <NuxtLink
            to="/privacy/general"
            class="bg-white dark:bg-gray-800 shadow rounded-lg p-8 sm:p-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p class="text-sm font-semibold uppercase tracking-wide text-primary-500">Company</p>
            <h2 class="mt-3 text-2xl font-bold text-gray-900 dark:text-white">General Privacy Notice</h2>
            <p class="mt-4 text-gray-600 dark:text-gray-300 leading-7">
              Privacy information for visitors using the company website and communicating with Tunjang Jaya
              Graftek through its general business channels.
            </p>
            <p class="mt-6 text-sm font-semibold text-primary-500">View general notice</p>
          </NuxtLink>

          <NuxtLink
            to="/privacy/markdown-reader"
            class="bg-white dark:bg-gray-800 shadow rounded-lg p-8 sm:p-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p class="text-sm font-semibold uppercase tracking-wide text-primary-500">Software Product</p>
            <h2 class="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Markdown Reader Privacy Policy</h2>
            <p class="mt-4 text-gray-600 dark:text-gray-300 leading-7">
              Product-specific privacy policy for the Markdown Reader application developed by Tunjang Jaya
              Graftek.
            </p>
            <p class="mt-6 text-sm font-semibold text-primary-500">View Markdown Reader policy</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policies - Tunjang Jaya Graftek',
  meta: [
    { name: 'description', content: 'Choose the relevant privacy policy for Tunjang Jaya Graftek and its software products.' },
    { property: 'og:title', content: 'Privacy Policies - Tunjang Jaya Graftek' },
    { property: 'og:description', content: 'Access general company privacy information and software-specific privacy policies.' },
    { property: 'og:url', content: 'https://tunjangjaya.com/privacy' },
    { name: 'twitter:title', content: 'Privacy Policies - Tunjang Jaya Graftek' },
    { name: 'twitter:description', content: 'Access general company privacy information and software-specific privacy policies.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://tunjangjaya.com/privacy' }
  ]
})
</script>
