<template>
  <div style="position: relative">
    <Header></Header>
    <!-- src="/images/blocks/hero/hero-illustration.svg" -->

    <!-- px-5 py-8 -->
    <div class="grid grid-nogutter surface-section mx-8 my-8 text-800">
      <div
        class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
        style="background-color: rgb(252, 244, 229)"
      >
        <section>
          <span class="block text-6xl font-bold mb-1">Location</span>
          <div class="text-3xl text-primary font-bold mb-3">686 Franklinway Crescent</div>
          <p class="mt-0 mb-4 text-700 line-height-3">
            Located in the peaceful west end, our spacious studio offers a welcoming environment for
            creativity. With plenty of parking and beautiful surroundings, it's the perfect place to
            craft your unique glass and silver designs. Come and bring your artistic vision to life!
          </p>

          <Button
            label="Book Now"
            type="button"
            class="mr-3 p-button-raised"
            @click="router.push('/booking')"
          ></Button>
          <Button
            label="Contact Us"
            type="button"
            class="p-button-outlined"
            @click="router.push('/contact')"
          ></Button>
        </section>
      </div>
      <div class="col-12 md:col-6 overflow-hidden" style="background-color: rgb(252, 244, 229)">
        <img
          src="/imgs/location.png"
          alt="Image"
          class="block w-full h-full"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
        />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'location',
}
</script>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
