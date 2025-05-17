<template>
<BaseServiceModal
    :model-value="true"
    title="UI/UX Design"
    @close="$emit('close')"
  >    <div class="space-y-4">
      <p class="text-gray-600">
        Our UI/UX Design service creates intuitive, engaging, and user-friendly interfaces that enhance user experience and drive business results.
      </p>

      <h3 class="text-xl font-semibold text-gray-900">Our Services:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>User research and analysis</li>
        <li>Wireframing and prototyping</li>
        <li>Visual design and branding</li>
        <li>User testing and feedback</li>
        <li>Design system development</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-900">Design Philosophy:</h3>
      <p class="text-gray-600">
        We believe in user-centered design that combines aesthetics with functionality, creating experiences that are both beautiful and practical.
      </p>
    </div>
  </BaseServiceModal>
</template>

<script setup>
import BaseServiceModal from './BaseServiceModal.vue'
defineEmits(['close'])
</script>