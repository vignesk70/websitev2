<template>
  <div class="bg-[url('/images/indexbackground.jpg')] bg-cover bg-center">
    <!-- Contact Hero Section -->
    <section class="relative  py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p class="mt-4 text-xl text-gray-200">
            Get in touch with our team
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <p class="mt-4 text-lg text-gray-500">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div class="mt-8 space-y-6">
              <div class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="h-6 w-6 text-primary-500" />
                <span class="ml-3 text-gray-500">Suite 33-01, Jalan Bukit Bintang, 50200 Kuala Lumpur, Malaysia</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-phone" class="h-6 w-6 text-primary-500" />
                <span class="ml-3 text-gray-500">+6018-3445471</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="h-6 w-6 text-primary-500" />
                <span class="ml-3 text-gray-500">info@tunjangjaya.com</span>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white shadow rounded-lg p-6">
            <UForm @submit.prevent="handleSubmit" class="space-y-6" :state="state" >
              <div>
                <UFormField label="Name" name="name">
                  <UInput v-model="form.name" placeholder="Your name" />
                </UFormField>
              </div>
              <div>
                <UFormField label="Email" name="email">
                  <UInput v-model="form.email" type="email" placeholder="your.email@example.com" />
                </UFormField>
              </div>
              <div>
                <UFormField label="Subject" name="subject">
                  <UInput v-model="form.subject" placeholder="How can we help?" />
                </UFormField>
              </div>
              <div>
                <UFormField label="Message" name="message">
                  <UTextarea
                    v-model="form.message"
                    placeholder="Your message"
                    :rows="4"
                  />
                </UFormField>
              </div>
              <div>
                <UButton
                  type="submit"
                  color="primary"
                  :loading="isSubmitting"
                >
                  Send Message
                </UButton>
              </div>
            </UForm>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://storage.googleapis.com/maps-solutions-fc1oh2wgnp/locator-plus/sj9b/locator-plus.html"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const state = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Here you would typically send the form data to your backend
    // await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: form.value
    })
    // Reset form after successful submission
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    // Show success message
    alert('Message sent successfully!')
  } catch (error) {
    // Handle error
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script> 