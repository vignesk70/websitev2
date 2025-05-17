<template>
<BaseServiceModal
    :model-value="true"
    title="Software Development"
    @close="$emit('close')"
  >    <div class="space-y-4">
      <p class="text-gray-600">
        Our Software Development service delivers custom solutions tailored to your specific business needs, from web applications to mobile apps and enterprise software.
      </p>

      <h3 class="text-xl font-semibold text-gray-900">Our Expertise:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Custom web application development</li>
        <li>Mobile app development (iOS & Android)</li>
        <li>Enterprise software solutions</li>
        <li>API development and integration</li>
        <li>Legacy system modernization</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-900">Development Process:</h3>
      <p class="text-gray-600">
        We follow agile methodologies to ensure transparent communication, regular updates, and high-quality deliverables that meet your requirements.
      </p>
    </div>
  </BaseServiceModal>
</template>

<script setup>
import BaseServiceModal from './BaseServiceModal.vue'
defineEmits(['close'])
</script>