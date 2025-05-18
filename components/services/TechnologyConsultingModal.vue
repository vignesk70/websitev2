<template>
 <BaseServiceModal
    :model-value="true"
    title="Technology Consulting"
    @close="$emit('close')"
  >
    <div class="space-y-4">
      <p class="text-gray-600 dark:text-gray-400">
        Our Technology Consulting service helps organizations make informed decisions about their technology stack and digital transformation initiatives.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Our Expertise:</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
        <li>Technology stack assessment and recommendations</li>
        <li>Digital transformation strategy</li>
        <li>System integration planning</li>
        <li>Technology roadmap development</li>
        <li>Vendor selection and management</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">How We Help:</h3>
      <p class="text-gray-600 dark:text-gray-400">
        We analyze your current technology infrastructure, identify gaps and opportunities, and provide actionable recommendations to improve efficiency and drive innovation.
      </p>
    </div>
  </BaseServiceModal>
</template>

<script setup>
import BaseServiceModal from './BaseServiceModal.vue'
defineEmits(['close'])
</script>