<template>
  <nav
    class="sticky top-0 z-40 border-b border-white/10 transition-all duration-300"
    :class="isScrolled ? 'bg-white/92 shadow-lg backdrop-blur dark:bg-gray-900/88' : 'bg-white/78 shadow-sm backdrop-blur dark:bg-gray-800/78'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="group flex items-center transition-transform duration-300 hover:-translate-y-0.5">
            <img
              class="h-8 w-auto transition-transform duration-300 group-hover:scale-105 dark:invert"
              src="/images/logo.png"
              alt="Company Logo"
            />
            <span class="ml-2 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">TJ Graftek</span>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            class="group relative px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
            :class="{ 'text-primary-500 dark:text-primary-400': isActive(item.href) }"
          >
            <span>{{ item.name }}</span>
            <span
              class="absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-primary-500 transition-transform duration-300"
              :class="isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
            />
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            color="neutral"
            variant="subtle"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="nav-fade">
      <div v-if="isMobileMenuOpen" class="sm:hidden">
        <div class="space-y-1 border-t border-black/5 bg-white/96 px-4 pb-4 pt-3 backdrop-blur dark:border-white/10 dark:bg-gray-900/94">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            class="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-primary-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-400"
            :class="{ 'bg-gray-50 text-primary-500 dark:bg-gray-700 dark:text-primary-400': isActive(item.href) }"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 16
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script> 
