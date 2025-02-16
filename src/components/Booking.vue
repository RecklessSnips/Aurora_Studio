<template>
  <div style="position: relative; background-color: rgb(252, 248, 241)">
    <Header></Header>
    <div class="card flex justify-content-center my-8">
      <Stepper v-model:activeStep="active" linear>
        <!-- Step 1 -->
        <StepperPanel>
          <template #header="{ index, clickCallback }">
            <button
              class="bg-transparent border-none inline-flex flex-column gap-2"
              @click="clickCallback"
            >
              <span
                :class="[
                  'border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center',
                  {
                    'bg-primary border-primary': index <= active,
                    'surface-border': index > active,
                  },
                ]"
              >
                <i class="pi pi-user" />
              </span>
            </button>
          </template>
          <template #content="{ nextCallback }">
            <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
              <div class="text-center mt-3 mb-3 text-xl font-semibold">Your information</div>
              <div class="field p-fluid">
                <IconField>
                  <InputIcon>
                    <i class="pi pi-user" />
                  </InputIcon>
                  <InputText id="input" v-model="name" type="text" placeholder="Name" />
                </IconField>
              </div>
              <div class="field p-fluid">
                <IconField>
                  <InputIcon>
                    <i class="pi pi-envelope" />
                  </InputIcon>
                  <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </IconField>
              </div>
              <div class="field p-fluid">
                <IconField>
                  <InputIcon>
                    <i class="pi pi-phone" />
                  </InputIcon>
                  <InputText id="phone" v-model="phone" type="phone" placeholder="Phone" />
                </IconField>
              </div>
              <div class="field p-fluid justify-content-center">
                <!-- <label for="stacked-buttons" class="font-bold block mb-2"> # of visitors </label> -->
                <InputNumber
                  v-model="value"
                  inputId="stacked-buttons"
                  showButtons
                  placeholder="Number of visitors"
                />
              </div>
              <div class="field p-fluid">
                <MultiSelect
                  v-model="selectedActivities"
                  display="chip"
                  :options="activities"
                  optionLabel="name"
                  placeholder="Select Activities"
                  :maxSelectedLabels="3"
                  class="w-full md:w-20rem"
                />
              </div>
              <div class="field p-fluid">
                <Textarea
                  v-model="text"
                  rows="5"
                  cols="45"
                  autoResize
                  placeholder="Tell us how you envision crafting your design."
                />
              </div>
            </div>
            <div class="flex pt-4 justify-content-end">
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
          </template>
        </StepperPanel>
        <!-- Step 2 -->
        <StepperPanel>
          <template #header="{ index, clickCallback }">
            <button
              class="bg-transparent border-none inline-flex flex-column gap-2"
              @click="clickCallback"
            >
              <span
                :class="[
                  'border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center',
                  {
                    'bg-primary border-primary': index <= active,
                    'surface-border': index > active,
                  },
                ]"
              >
                <i class="pi pi-star" />
              </span>
            </button>
          </template>
          <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
              <div class="text-center mt-3 mb-3 text-xl font-semibold">Date & Time</div>
              <div class="flex flex-wrap justify-content-center">
                <div class="flex">
                  <!-- <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label> -->
                  <Calendar
                    id="calendar-24h"
                    v-model="datetime24h"
                    showTime
                    hourFormat="24"
                    placeholder="Select a time"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-content-between">
              <Button
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="prevCallback"
              />
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
          </template>
        </StepperPanel>
        <!-- Step 3 -->
        <StepperPanel>
          <template #header="{ index, clickCallback }">
            <button
              class="bg-transparent border-none inline-flex flex-column gap-2"
              @click="clickCallback"
            >
              <span
                :class="[
                  'border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center',
                  {
                    'bg-primary border-primary': index <= active,
                    'surface-border': index > active,
                  },
                ]"
              >
                <i class="pi pi-id-card" />
              </span>
            </button>
          </template>
          <template #content="{ prevCallback }">
            <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
              <div class="text-center mt-3 mb-3 text-xl font-semibold">Payments</div>
              <div class="text-center">
                <div class="p-3">
                  <div class="surface-card p-4 border-round shadow-2">
                    <div class="border-bottom-1 surface-border pb-4">
                      <span class="text-900 text-xl block">Order Summary</span>
                    </div>
                    <div class="border-bottom-1 surface-border my-3 py-2">
                      <div class="flex justify-content-between mb-3">
                        <span class="text-900">Price</span>
                        <span class="text-900">$123.00</span>
                      </div>
                      <div class="flex justify-content-between mb-3">
                        <span class="text-900">Delivery</span>
                        <span class="text-green-500">Free</span>
                      </div>
                      <div class="flex justify-content-between mb-3">
                        <span class="text-900">Discount</span>
                        <span class="text-900">$12.00</span>
                      </div>
                    </div>
                    <div class="border-bottom-1 surface-border my-3 py-2">
                      <div class="flex justify-content-between mb-3">
                        <span class="text-900 font-medium">Total</span>
                        <span class="text-900 font-bold">$111.00</span>
                      </div>
                      <div class="flex align-items-center mt-3">
                        <div class="flex flex-column gap-3">
                          <div
                            v-for="category in categories"
                            :key="category.source"
                            class="flex align-items-center"
                          >
                            <RadioButton
                              v-model="selectedCategory"
                              :inputId="category.source"
                              name="dynamic"
                              :value="category.name"
                            />
                            <label :for="category.source" class="ml-2 mr-6">{{
                              category.name
                            }}</label>
                            <img :src="category.source" class="w-4rem ml-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Toast />
                    <Button
                      class="surface-400 border-none hover:bg-primary w-full mt-3"
                      :disabled="!isSelected"
                      label="Place Order"
                      @click="checkout"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex pt-4 justify-content-start">
              <Button
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="prevCallback"
              />
            </div>
          </template>
        </StepperPanel>
      </Stepper>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'booking',
}
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const router = useRouter()

const active = ref(0)
const name = ref()
const email = ref()
const phone = ref()
const text = ref()

const value = ref()

const selectedActivities = ref()
const activities = ref([
  { name: 'Ring crafting', code: 'RC' },
  { name: 'Glass blowing', code: 'GB' },
])

const datetime24h = ref()

const selectedCategory = ref('')
const isSelected = computed(() => selectedCategory.value !== '')

const categories = ref([
  { name: 'Credit or Debit card', source: '/images/blocks/ecommerce/ordersummary/visa.png' },
  {
    name: 'PayPal',
    source: 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg',
  },
])

const loading = ref(false)

const checkout = () => {
  toast.add({
    severity: 'success',
    summary: 'Payment succeed!',
    detail: 'Thank you for choosing Aurora Studio!',
    life: 3000,
  })
  loading.value = true
  setTimeout(() => {
    loading.value = false
    router.push('/confirmation')
  }, 2000)
}
</script>

<style scoped>
.p-stepper {
  flex-basis: 40rem;
}
</style>
