<template>
  <BaseServiceModal
    :model-value="true"
    title="Transformation Study"
    @close="$emit('close')"
  >
    <p class="text-gray-600">
      Our Transformation Study service helps organizations identify and address their key challenges through a systematic approach.
    </p>
    
    <h3 class="text-xl font-semibold text-gray-900 mt-4">What We Offer:</h3>
    <ul class="list-disc pl-5 space-y-2">
      <li>Comprehensive business process analysis</li>
      <li>Identification of pain points and bottlenecks</li>
      <li>Stakeholder engagement and interviews</li>
      <li>Data-driven insights and recommendations</li>
      <li>Implementation roadmap development</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-900 mt-4">Our Approach:</h3>
    <p class="text-gray-600">
      We work closely with your teams to understand your current processes, challenges, and goals. Through a combination of interviews, workshops, and data analysis, we develop a clear understanding of your needs and create a tailored transformation strategy.
    </p>
  </BaseServiceModal>
</template>

<script setup>
import BaseServiceModal from './BaseServiceModal.vue'

defineEmits(['close'])
</script>