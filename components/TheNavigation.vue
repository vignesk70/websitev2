<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <img
              class="h-8 w-auto"
              src="/images/logo.png"
              alt="Company Logo"
            />
            <span class="ml-2 text-xl font-bold text-gray-900">TJ Graftek</span>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            class="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
            :class="{ 'text-primary-500': isActive(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
          :class="{ 'text-primary-500 bg-gray-50': isActive(item.href) }"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

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
</script> 