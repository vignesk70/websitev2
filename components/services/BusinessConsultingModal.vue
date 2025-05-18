<template>
<BaseServiceModal
    :model-value="true"
    title="Business Consulting"
    @close="$emit('close')"
  >
    <div class="space-y-4">
      <p class="text-gray-600 dark:text-gray-400">
        Our Business Consulting service focuses on helping organizations navigate change and improve their operational effectiveness.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Services Include:</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
        <li>Change management strategy</li>
        <li>Organizational structure optimization</li>
        <li>Process improvement and reengineering</li>
        <li>Performance management systems</li>
        <li>Strategic planning and execution</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Our Methodology:</h3>
      <p class="text-gray-600 dark:text-gray-400">
        We work with your leadership team to develop and implement effective change management strategies, ensuring smooth transitions and sustainable improvements.
      </p>
    </div>
  </BaseServiceModal>
</template>

<script setup>
import BaseServiceModal from './BaseServiceModal.vue'
defineEmits(['close'])
</script>