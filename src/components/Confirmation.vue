<template>
  <div style="position: relative">
    <Header></Header>

    <!-- Confirmation -->
    <!-- bg-blue-0 px-4 py-8 md:px-6 lg:px-8 -->
    <div class="text-center mx-8 my-8">
      <div
        class="bg-blue-0 text-black-600 font-bold border-round py-1 mx-auto"
        style="max-width: 400px"
      >
        <h1>
          <i class="pi pi-shopping-bag" style="color: rgb(250, 181, 52); font-size: 2.5rem"></i>
        </h1>
        <h1 class="text-6xl">🔥Thank you!🔥</h1>
      </div>
      <div class="text-2xl text-900 font-bold mb-3">A confirmation has been sent to your email</div>
      <p class="text-600 line-height-3 mb-6">Are you excited to craft?</p>

      <div class="flex align-items-center justify-content-center">
        <div class="card flex justify-center">
          <div class="card flex flex-column align-items-center">
            <Rating v-model="ratingValue" :cancel="false" class="mb-2" />
            <Toast />
            <Button
              class="mt-2"
              label="Submit"
              @click="submitRating"
              icon="pi pi-search"
              :loading="loading"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer class="mt-auto"></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'confirmation',
}
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const route = useRoute()
const router = useRouter()

const backgroundImage = computed(() => route.meta.background)

const ratingValue = ref<number | null>(null)

const submitRating = () => {
  if (ratingValue.value === null) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Please rate first!', life: 3000 })
  } else {
    toast.add({
      severity: 'success',
      summary: 'Thank You!',
      detail: 'Your feedback is valuable!',
      life: 3000,
    })
    loading.value = true
    setTimeout(() => {
      loading.value = false
      router.push('/')
    }, 2000)
  }
}

const loading = ref(false)

const visible = ref(false)
</script>
