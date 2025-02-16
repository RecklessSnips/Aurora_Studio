<template>
  <div style="position: relative; margin: 0; background-color: rgb(49, 31, 31)">
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
              Forge Beauty in Molten Glass
            </div>
            <p class="descrip text-white-alpha-80 mt-0 mb-5 text-700 line-height-3 text-xl">
              Glassblowing is a craft that perfectly blends artistry and technical skill. At Aurora,
              we offer you a professional and unique glassblowing experience. By mastering the
              precise control of flames, you'll learn how to shape, stretch, blow and even design
              your own creations from molten glass.
            </p>
          </div>
          <div
            class="w-full xl:w-6 p-1 flex align-items-center justify-content-center lg:p-2 xl:mt-0"
            style="border-radius: 30px"
          >
            <div class="relative w-full" style="padding-bottom: 56.25%; width: 100%; height: 100%">
              <img class="absolute top-0 left-0 w-full h-full" src="/imgs/IMG_4506.png" alt="" />
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
            <div
              class="relative w-full pr-8"
              style="padding-bottom: 56.25%; width: 100%; height: 80%"
            >
              <img class="absolute top-0 left-0 w-full h-full" src="/imgs/IMG_4508.png" alt="" />
            </div>
          </div>
          <div class="w-full xl:w-6 p-3 pr-5 pl-3">
            <span class="descrip text-white-alpha-80 text-4xl font-bold mb-4 block">Blowing</span>
            <div class="descrip text-white-alpha-80 font-semibold text-800 text-2xl mb-4">
              Turn Heat into Art
            </div>
            <p class="descrip text-white-alpha-80 mt-0 mb-5 text-700 line-height-3 text-xl">
              From design to crafting, you'll transform raw glass to a radiant masterpiece with your
              own hands. Whether it's a delicate eternal rose, a unique Christmas tree, or a
              beautiful butterfly, every spark of the flame is infused with creativity and passion.
              Let you imagination take shape in the fusion of fire and art, solidify the glass into
              your precious memory.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd part -->
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover my-8 w-full"
      style="
        height: 20em;
        background-image: url('/imgs/johannes-w-gkaDpVKde_Y-unsplash.jpg');
        background-size: 10%;
        background-position: calc(60%) calc(50% - 10px);
        background-position-x: right;
        filter: contrast(90%) brightness(80%);
      "
    >
      <div class="text-left relative" style="margin-left: 13rem">
        <div class="descrip text-white-alpha-80 text-4xl font-bold mb-1 text-white my-4">
          Poetry in Glass
        </div>
        <div class="text-1xl">
          <p
            class="descrip text-white-alpha-90 mt-0 mb-3 mr-auto text-left line-height-2 text-1xl"
            style="max-width: 450px; text-align: left"
          >
            The heat of the flame awakens the cold glass, just as it awakens your creativity.
            Holding the glass, soft as water, every gentle breath, every delicate carve, every
            meticulous shaping is a heartfelt expression of your love. <br /><br />
            You pour love into the formless glass, capturing the focus and passion of that moment.
            <br /><br />
            Glass fragile but eternal, it captures your love, as moving as the light that shines
            through it.
          </p>
        </div>
      </div>
    </div>

    <div class="surface-section mx-8 my-8">
      <div class="flex flex-wrap" :style="{ backgroundColor: bgColor }">
        <div class="w-full xl:w-6 p-3 pr-5">
          <span class="descrip text-white-alpha-80 text-4xl font-bold mb-4 block">Crafting</span>
          <div class="descrip text-white-alpha-80 font-semibold text-800 text-2xl mb-4">
            Build whatever you want
          </div>
          <p class="descrip text-white-alpha-80 mt-0 mb-5 text-700 line-height-3 text-xl">
            Watch as others transform molten glass into breathtaking masterpieces! At Aurora Studio,
            we provide expert guidance, premium materials, and a hands-on experience like no other.
            Feel the heat, mold the glass, and craft something uniquely yours.
          </p>
        </div>
        <div
          class="w-full xl:w-6 p-1 flex align-items-center justify-content-center lg:p-2 xl:mt-0"
          style="border-radius: 30px"
        >
          <div class="relative w-full" style="padding-bottom: 56.25%; height: 0">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_-ZUwSwVGXo"
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
  name: 'Service-glass',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const visible = ref(false)

const bgColor = ref('rgb(49, 31, 31)')
</script>

<style scoped>
.descrip {
  font-family: 'Jeju Myeongjo', serif;
}
</style>
