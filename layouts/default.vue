<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden bg-sky-800 bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="motion-float motion-glow absolute -left-24 top-24 h-64 w-64 rounded-full bg-primary-500/18 blur-3xl"></div>
      <div class="motion-float absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" style="animation-delay: 1.2s"></div>
    </div>
    <TheNavigation />
    <main class="relative z-10 flex-grow">
      <slot />
    </main>
    <footer v-reveal class="relative z-10 bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-reveal="{ delay: 40 }">
            <h3 class="text-lg font-semibold mb-4">About Us</h3>
            <p class="text-gray-400">We provide innovative solutions for your business needs.</p>
          </div>
          <div v-reveal="{ delay: 120 }">
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 grid grid-cols-2">
              <li><NuxtLink to="/" class="text-gray-400 hover:text-white">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-400 hover:text-white">About</NuxtLink></li>
              <li><NuxtLink to="/services" class="text-gray-400 hover:text-white">Services</NuxtLink></li>
              <li><NuxtLink to="/projects" class="text-gray-400 hover:text-white">Projects</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white">Contact</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="text-gray-400 hover:text-white">Privacy</NuxtLink></li>
            </ul>
          </div>
          <!-- <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/services/web-development" class="text-gray-400 hover:text-white">Transformation Study</NuxtLink></li>
              <li><NuxtLink to="/services/digital-marketing" class="text-gray-400 hover:text-white">Technology Consulting</NuxtLink></li>
              <li><NuxtLink to="/services/consulting" class="text-gray-400 hover:text-white">Business Consulting</NuxtLink></li>
            </ul>
          </div> -->
          <div v-reveal="{ delay: 200 }">
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="h-5 w-5 mr-2" />
                Suite 33-01, Jalan Bukit Bintang, 50470 Kuala Lumpur
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-phone" class="h-5 w-5 mr-2" />
                +6018 3445471
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="h-5 w-5 mr-2" />
                info@tunjangjaya.com
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400" v-reveal="{ delay: 260 }">
          <p>&copy; 2019-{{ new Date().getFullYear() }} Tunjang Jaya Graftek Sdn Bhd [201901031566 (1340896-U)]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template> 
