<template>
  <div style="position: relative; margin: 0; background-color: rgb(52, 47, 61)">
    <!-- 1st part -->
    <Header></Header>

    <!-- 2nd Part -->
    <div class="">
      <!-- mx-8 px-4 py-4 md:px-6 lg:px-8 -->
      <div class="surface-section mx-8 mt-8">
        <div class="flex flex-wrap" :style="{ backgroundColor: bgColor }">
          <div class="w-full xl:w-6 p-3 pr-5">
            <span class="descrip text-white-alpha-80 text-4xl font-bold mb-4 block"
              >Our Specialty</span
            >
            <div class="descrip text-white-alpha-80 font-semibold text-800 text-2xl mb-4">
              Take Control of Your Ring Design
            </div>
            <p class="descrip text-white-alpha-80 mt-0 mb-5 text-700 line-height-3 text-xl">
              At Aurora, we offer a complete hands-on silver jewelry crafting experience. With the
              variety of ring molds and decorative options, you can freely create your unique
              jewelry style.
            </p>
          </div>
          <div
            class="w-full xl:w-6 p-1 flex align-items-center justify-content-center lg:p-2 xl:mt-0"
            style="border-radius: 30px"
          >
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 90%">
              <img
                class="absolute top-0 left-0 w-full h-full"
                src="/imgs/sama-hosseini-8dTc4JFeLm4-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- mx-8 px-4 py-4 md:px-6 lg:px-8 -->
      <div class="surface-section mx-8">
        <div class="flex flex-wrap" :style="{ backgroundColor: bgColor }">
          <div
            class="w-full xl:w-6 flex align-items-center justify-content-center lg:p-2 xl:mt-0"
            style="border-radius: 30px"
          >
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 70%">
              <!-- https://www.youtube.com/embed/_-ZUwSwVGXo -->
              <img
                class="absolute top-0 left-0 w-full h-full"
                src="/imgs/cornelia-ng-hxtKsjWSd3M-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="w-full xl:w-6 p-3 pr-5">
            <span class="descrip text-white-alpha-80 text-4xl font-bold mb-4 block">Texturing</span>
            <div class="descrip text-white-alpha-80 font-bold text-800 text-2xl mb-4">
              Shape the glass, capture the moment.
            </div>
            <p class="descrip text-white-alpha-80 mt-0 mb-5 text-700 line-height-3 text-xl">
              First time? No worries! Our staff will help you along your crafting journey. We
              provide premium silver materials and free guidance until you are satisfy with your
              design! <br /><br />
              We also provide personalized engraving and texturing services, letting you add meaning
              ful touches such as special date, name, or patterns to your creation.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd part -->
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover my-8"
      style="
        height: 20em;
        background-image: url('/imgs/alvin-lZ45T4-9WWk-unsplash.jpg');
        background-size: cover;
        background-position: center calc(50% - 5px);
        filter: contrast(90%) brightness(85%) saturate(120%);
      "
    >
      <div class="text-right relative" style="margin-right: 13rem">
        <div class="descrip text-white-alpha-80 text-4xl font-bold mb-1 text-white my-4">
          Etching Eternity
        </div>
        <div class="text-1xl">
          <p
            class="descrip text-white-alpha-90 mt-0 mb-3 ml-auto text-start line-height-3"
            style="max-width: 450px; text-align: left"
          >
            Ring, a memory etched in time, embedding your emotions into every glimmer of silver and
            engraving a story that's uniquely yours. <br /><br />
            It carries your selfless love for that special someone, like a timeless promise that
            resets on the finger and lives in the heart. <br /><br />
            No matter how long the time goes, every glance at it, it's whispering, the deep
            affection and the unforgettable moments you hold dear.
          </p>
        </div>
      </div>
    </div>

    <div class="surface-section mx-8 my my-8">
      <div class="flex flex-wrap" :style="{ backgroundColor: bgColor }">
        <div class="w-full xl:w-6 p-3 pr-5">
          <span class="descrip text-white-alpha-80 text-4xl font-bold mb-4 block">Crafting</span>
          <div class="descrip text-white-alpha-80 font-semibold text-800 text-2xl mb-4">
            Add as many pendants as you want
          </div>
          <p class="descrip text-white-alpha-80 mt-0 mb-5 text-700 line-height-3 text-xl">
            We offer a wide selection of unique charms for you to personalize your ring. Whether you
            prefer elegant, playful, or symbolic designs, you can mix and match to create something
            truly special. Unleash your creativity and make a piece that reflects your style and
            story!
          </p>
        </div>
        <div
          class="w-full xl:w-6 p-1 flex align-items-center justify-content-center lg:p-2 xl:mt-0"
          style="border-radius: 30px"
        >
          <div class="relative w-full" style="padding-bottom: 56.25%; height: 90%">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/C797mHoTT6g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Service-ring',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const visible = ref(false)

const bgColor = ref('rgb(52, 47, 61)')
</script>

<style scoped>
.descrip {
  font-family: 'Jeju Myeongjo', serif;
}
</style>
