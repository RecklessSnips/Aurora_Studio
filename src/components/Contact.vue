<template>
  <div style="position: relative">
    <Header></Header>

    <!-- px-4 py-8 -->
    <div class="surface-section mx-8 my-8">
      <div class="grid grid-nogutter">
        <div
          class="col-12 md:col-6 bg-no-repeat bg-cover p-8"
          style="background-image: url('/images/blocks/contact/contact-2.jpg')"
        >
          <div class="text-white text-2xl font-medium mb-2">Contact Us</div>
          <div class="text-gray-300 line-height-3 mb-6">
            Have questions about our workshops? Want to book a session or inquire about a custom
            design? We'd love to hear from you!
          </div>
          <div class="text-white line-height-1 mb-4">
            <div class="mb-2 text-xl font-semibold">Operating Hours</div>
            <div class="mb-2">Mon-Fri: 9am - 9pm</div>
            <div class="mb-2">Sat-Sun: 9.30am - 5.30pm</div>
          </div>
          <a
            class="inline-flex align-items-center text-blue-300 font-bold no-underline cursor-pointer"
            href="https://www.google.com/maps/place/686+Franklinway+Crescent,+London,+ON+N6G+5C8/@43.0220462,-81.3146376,1355m/data=!3m1!1e3!4m6!3m5!1s0x882eefb930a80a47:0x70f5adddec619032!8m2!3d43.0220462!4d-81.3117408!16s%2Fg%2F11c2bjr3jx?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <span class="mr-3">View Address on Google Maps</span>
            <i class="pi pi-arrow-right"></i>
          </a>
          <ul class="list-none p-0 m-0 mt-6 text-white">
            <li class="flex align-items-center mb-3">
              <i class="pi pi-phone mr-2"></i>
              <span>+123 456 7890</span>
            </li>
            <li class="flex align-items-center mb-3">
              <i class="pi pi-twitter mr-2"></i>
              <span>@autora_studio</span>
            </li>
            <li class="flex align-items-center">
              <i class="pi pi-inbox mr-2"></i>
              <span>aurora@gmail.com</span>
            </li>
          </ul>
        </div>
        <!-- :style="{ backgroundColor: bgColor }" -->
        <div class="col-12 md:col-6" style="background-color: rgb(253, 246, 227)">
          <div class="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
            <div class="field col-12 lg:col-6 mb-4">
              <InputText
                id="firstname"
                type="text"
                class="py-3 px-2 text-lg"
                placeholder="First Name"
              />
            </div>
            <div class="field col-12 lg:col-6 mb-4">
              <InputText
                id="lastname"
                type="text"
                class="py-3 px-2 text-lg"
                placeholder="Last Name"
              />
            </div>
            <div class="field col-12 mb-4">
              <InputText id="email" type="text" class="py-3 px-2 text-lg" placeholder="Email" />
            </div>
            <div class="field col-12 mb-4">
              <InputText id="phone" type="text" class="py-3 px-2 text-lg" placeholder="Phone" />
            </div>
            <div class="field col-12 mb-4">
              <Textarea
                id="message"
                :rows="3"
                :autoResize="true"
                class="py-3 px-2 text-lg"
                placeholder="Message"
              ></Textarea>
              <Toast />
            </div>
            <div class="col-12 text-right">
              <Button
                label="Submit"
                icon="pi pi-envelope"
                class="px-5 py-3 w-auto"
                @click="register"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'contact',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const bgColor = ref('rgb(252, 244, 229)')

const register = () => {
  toast.add({
    severity: 'success',
    summary: 'Got it!',
    detail: "We'll reply within 1 business day",
    life: 3000,
  })
}
</script>
