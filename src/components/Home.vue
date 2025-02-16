<template>
  <div style="position: relative">
    <Header></Header>
    <!-- 2nd part -->
    <div :style="{ backgroundColor: bgColor }" class="mt-6">
      <div class="grid justify-content-center text-start">
        <div class="col-5 col-offset-1 text-start">
          <div class="flex flex-column flex-wrap justify-content-center align-items-start">
            <h1 class="intro mb-1">Our Workshop</h1>
            <h4 class="intro_text" style="max-width: 500px">
              At Aurora Studio, we bring the art of glassblowing and silver jewelry crafting to
              life. Whether you're shaping molten glass into delicate forms or designing a custom
              silver ring, every piece you create is a reflection of your creativity and
              craftsmanship.
            </h4>
          </div>
        </div>

        <div class="col-5 pt-8 flex justify-content-center">
          <h4 class="intro_text" style="max-width: 500px">
            Our workshop is a space for hands-on experiences—perfect for couples, friends, or anyone
            looking to craft something unique. With expert guidance and quality materials, you'll
            walk away with more than just a handmade piece; you'll leave with a memory that lasts a
            lifetime.
          </h4>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mt-8 mb-8">
      <div
        class="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8"
        style="
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)),
            linear-gradient(246.36deg, #feedd0 15.22%, #f7ebcc 65.22%);
        "
      >
        <div class="text-4xl text-white mb-3 font-medium">DIY Glass and ring handcrafts</div>
        <p class="line-height-3 mt-0 mb-7 p-0 text-white text-2xl">
          Craft your own unique handcraft with your beloved one
        </p>
        <Button
          label="START NOW"
          class="p-button-warning text-2xl"
          @click="router.push('/glass')"
        ></Button>
      </div>
      <div
        class="w-full md:w-6 bg-no-repeat bg-cover"
        style="background: url('/imgs/samantha-gades-N1CZNuM_Fd8-unsplash.jpg'); min-height: 400px"
      ></div>
    </div>

    <div
      v-if="showPromo"
      class="bg-bluegray-900 text-white p-3 flex justify-content-between align-items-center flex-wrap shadow-2"
      style="border-radius: 8px"
    >
      <div class="font-bold">🔥 Hot Deals!</div>
      <div class="align-items-center flex">
        <span class="line-height-3 hidden lg:block"
          >Register for a 1-hour glassblowing session and get a free 30-minute ring DIY
          session!</span
        >
      </div>
      <a
        v-ripple
        @click="closePromo"
        class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-cyan-400 cursor-pointer transition-colors transition-duration-150 p-ripple"
        style="width: 2rem; height: 2rem"
      >
        <i class="pi pi-times"></i>
      </a>
    </div>

    <!-- px-4 py-8 md:px-6 lg:px-8 -->
    <div v-if="showPromo" class="surface-section mx-8 mt-4 mb-8">
      <div class="flex flex-wrap" :style="{ backgroundColor: bgColor }">
        <div class="p-2 w-full xl:w-6">
          <div
            class="bg-no-repeat bg-cover p-3 border-round pr-2"
            style="background: url('/images/blocks/ecommerce/promosection/promo-section-5-1-x.jpg')"
          >
            <div
              class="border-2 border-round border-gray-900 flex flex-column sm:flex-row overflow-hidden"
            >
              <div
                class="flex-1 text-center bg-white-alpha-60 font-medium"
                style="backdrop-filter: blur(15px)"
              >
                <div class="p-6 flex flex-column align-items-center">
                  <span class="text-xl text-gray-900 mb-5">Up To</span>
                  <span class="text-xl text-gray-900 mb-5 text-5xl"
                    >10 <span class="text-xl text-gray-900">% OFF</span></span
                  >
                  <span class="text-xl text-gray-900">Premium Glass Creation</span>
                </div>
              </div>
              <div
                class="flex-1 bg-no-repeat bg-cover"
                style="
                  background: url('/images/blocks/ecommerce/promosection/promo-section-5-1.jpg');
                  min-height: 200px;
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="p-2 w-full xl:w-6">
          <div
            class="bg-no-repeat bg-cover p-3 border-round pr-2"
            style="background: url('/images/blocks/ecommerce/promosection/promo-section-5-2-x.jpg')"
          >
            <div
              class="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden"
            >
              <div
                class="flex-1 text-center bg-dark-alpha-60 font-medium"
                style="backdrop-filter: blur(15px)"
              >
                <div class="p-6 flex flex-column align-items-center">
                  <span class="text-xl text-gray-100 mb-5">Up To</span>
                  <span class="text-xl text-gray-100 mb-5 text-5xl"
                    >20 <span class="text-xl text-gray-100">% OFF</span></span
                  >
                  <span class="text-xl text-gray-100">Exclusive Ring Creation</span>
                </div>
              </div>
              <div
                class="flex-1 bg-no-repeat bg-cover"
                style="
                  background: url('/images/blocks/ecommerce/promosection/promo-section-5-2.jpg');
                  min-height: 200px;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- px-4 py-8 md:px-6 lg:px-8 -->
    <div class="surface-section mx-8">
      <!-- style="background-color: black" -->
      <div class="grid -mr-4 -ml-4 flex-column xl:flex-row" :style="{ backgroundColor: bgColor }">
        <div class="col-12 xl:col-6 p-4">
          <div class="bg-yellow-50 border-round flex flex-column justify-content-center h-full p-6">
            <p class="text-yellow-600 mb-4 font-bold">Ring Craft</p>
            <div class="text-yellow-900 text-3xl font-medium">
              Learn engraving and texturing techniques
            </div>
            <p class="text-yellow-800 text-xl line-height-3">
              Whether you prefer a sleek minimalist design or a textured, engraved masterpiece, our
              expert-guided workshop helps bring your vision to life.
            </p>
            <Button label="More" severity="warning" outlined @click="router.push('ring')" />
          </div>
        </div>
        <div class="col-12 xl:col-6 p-4">
          <img
            src="/imgs/katelyn-macmillan-X1504kwZTnI-unsplash.jpg"
            class="w-full"
            alt="product"
          />
        </div>
        <div class="col-12 xl:col-6 p-4">
          <img src="/imgs/IMG_4500.png" class="w-full" alt="product" />
        </div>
        <div class="col-12 xl:col-6 p-4">
          <div class="bg-cyan-50 border-round flex flex-column justify-content-center h-full p-6">
            <p class="text-cyan-600 mb-4 font-bold">Glass Blow</p>
            <div class="text-cyan-900 text-3xl font-medium">
              Create personalized glass art pieces
            </div>
            <p class="text-cyan-800 text-xl line-height-3">
              Shape molten glass into unique designs, crafting delicate ornaments, vases, or
              decorative pieces
            </p>
            <Button label="More" severity="info" outlined @click="router.push('/glass')" />
          </div>
        </div>
      </div>
    </div>
    <!-- 3rd part -->
    <div
      class="mt-8"
      style="
        height: 22em;
        background: url('/imgs/Screenshot 2025-01-25 195726.png') no-repeat;
        background-size: cover;
        background-position: center calc(45%);
        /* filter: contrast(80%) brightness(80%) saturate(120%); */
        position: relative;
      "
    >
      <div class="flex justify-content-center">
        <div class="col-8 text-center">
          <h1 class="middle">Why Us</h1>
          <h4 class="middle_text text-start">
            We are dedicated to providing you and your loved one with the best materials and
            hands-on guidance, so you can create your masterpiece in to time.
          </h4>
        </div>
      </div>
    </div>
    <!-- 4th part -->
    <!-- px-4 py-8 md:px-6 lg:px-8 -->
    <div class="text-center px-4 py-8 md:px-6 lg:px-8" :style="{ backgroundColor: bgColor }">
      <div class="flex flex-column md:flex-row" style="background-color:">
        <div class="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
          <div class="shadow-2 surface-card border-round-xl relative">
            <img
              src="/images/blocks/testimonial/testimonials-1.png"
              width="100"
              height="100"
              class="absolute left-50"
              style="margin-left: -50px; top: -50px"
            />

            <div class="px-4 pb-4 pt-8 relative">
              <p
                class="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border"
              >
                “An amazing experience for couples! Our first time glassblowing, and the final piece
                turned out beautifully!”
              </p>

              <div class="text-900 font-semibold line-height-3 mt-4">Jake</div>
            </div>
          </div>
        </div>

        <div class="flex flex-grow-1 mb-4 md:mb-0 md:px-4 py-4 md:py-0">
          <div class="shadow-2 surface-card border-round-xl relative">
            <img
              src="/images/blocks/testimonial/testimonials-2.png"
              width="100"
              height="100"
              class="absolute left-50"
              style="margin-left: -50px; top: -50px"
            />

            <div class="px-4 pb-4 pt-8 relative">
              <p
                class="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border"
              >
                “Crafting my own silver ring was such a special experience. The process was so
                meaningful. Highly recommend!”
              </p>

              <div class="text-900 font-semibold line-height-3 mt-4">Lucy</div>
            </div>
          </div>
        </div>

        <div class="flex flex-grow-1 md:px-4 py-4 md:py-0">
          <div class="shadow-2 surface-card border-round-xl relative">
            <img
              src="/images/blocks/testimonial/testimonials-3.png"
              width="100"
              height="100"
              class="absolute left-50"
              style="margin-left: -50px; top: -50px"
            />

            <div class="px-4 pb-4 pt-8 relative">
              <p
                class="text-900 font-italic line-height-3 text-lg m-0 pb-4 border-bottom-1 surface-border"
              >
                “Had a fantastic time making jewelry with my friends! It was hard but
                enjoyable.Can't wait to try glassblowing next!”
              </p>

              <div class="text-900 font-semibold line-height-3 mt-4">Annie</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const visible = ref(false)

const bgColor = ref('rgb(252, 244, 229)')

const showPromo = ref(true)

const closePromo = () => {
  showPromo.value = false
}
</script>

<style scoped>
.intro_text,
.intro {
  font-family: 'Jeju Myeongjo', serif;
  font-weight: 200;
}

.intro {
  font-size: 2.5rem;
}

.intro_text {
  font-size: 1.3rem;
  line-height: 1.8rem;
}

.middle_text,
.middle {
  color: rgb(0, 0, 0);
  mix-blend-mode: normal;
  font-family: 'Jeju Myeongjo', serif;
  font-weight: 200;
}

.middle {
  font-size: 2.5rem;
}

.middle_text {
  font-size: 2rem;
}
</style>
