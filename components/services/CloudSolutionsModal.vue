<template>
<BaseServiceModal
    :model-value="true"
    title="Cloud Solutions"
    @close="$emit('close')"
  >
    <div class="space-y-4">
      <p class="text-gray-600">
        Our Cloud Solutions service helps organizations leverage the power of cloud computing to improve scalability, reliability, and cost-effectiveness.
      </p>

      <h3 class="text-xl font-semibold text-gray-900">What We Offer:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Cloud migration strategy and planning</li>
        <li>Multi-cloud and hybrid cloud solutions</li>
        <li>Cloud infrastructure optimization</li>
        <li>Cloud security and compliance</li>
        <li>Cloud cost management</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-900">Our Approach:</h3>
      <p class="text-gray-600">
        We help you navigate the complex cloud landscape, selecting the right solutions for your needs and ensuring a smooth transition to the cloud. We prefer Alibaba Cloud or AWS as our cloud providers.

      </p>
    </div>
  </BaseServiceModal>
</template>

<script setup>  
import BaseServiceModal from './BaseServiceModal.vue'
defineEmits(['close'])
</script>