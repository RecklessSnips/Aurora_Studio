<template>
  <div style="position: relative">
    <Header></Header>
    <!-- Team -->
    <!-- px-4 py-8 md:px-6 lg:px-8 -->
    <div class="surface-section mx-8 my-8">
      <div
        class="text-center font-bold text-900 text-5xl line-height-3"
        style="background-color: rgb(252, 244, 229)"
      >
        Who Are We?
      </div>
      <div
        class="text-center text-xl line-height-4 text-600"
        style="background-color: rgb(252, 244, 229)"
      >
        Faucibus ornare suspendisse sed nisi. Nisl rhoncus mattis rhoncus urna neque viverra justo
        nec.
      </div>
      <div class="grid">
        <div
          v-for="(member, index) in teamMember"
          :key="index"
          class="col-12 md:col-6 lg:col-3 p-3"
          style="background-color: rgb(252, 244, 229)"
        >
          <div
            class="relative overflow-hidden"
            @mouseenter="visibleMember = index"
            @mouseleave="visibleMember = null"
          >
            <div class="w-full h-17rem overflow-hidden">
              <img :src="member.image" class="w-full h-full object-cover block" />
            </div>
            <div
              class="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none"
              style="background-color: rgba(0, 0, 0, 0.7)"
              v-if="visibleMember === index"
            >
              <div class="flex flex-column p-5 h-full">
                <span class="block font-medium text-white text-xl mb-3">{{ member.name }}</span>
                <span class="font-medium text-400">{{ member.role }}</span>
                <div class="mt-auto">
                  <a tabindex="0" class="cursor-pointer text-white"
                    ><i class="pi pi-twitter text-600 text-xl mr-3"></i
                  ></a>
                  <a tabindex="0" class="cursor-pointer text-white"
                    ><i class="pi pi-github text-600 text-xl mr-3"></i
                  ></a>
                  <a tabindex="0" class="cursor-pointer text-white"
                    ><i class="pi pi-facebook text-600 text-xl"></i
                  ></a>
                </div>
              </div>
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
  name: 'clientinfo',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

const visibleMember = ref<number | null>(null)

const teamMember = ref([
  {
    name: 'Jar Jar Binks',
    role: 'Ring Designer',
    image: '/imgs/boy.png',
  },
  {
    name: 'Kristin Loved',
    role: 'Glass Blowing Artist',
    image: '/imgs/freestocks.png',
  },
  {
    name: 'Annya Karenina',
    role: 'Ring Specialist',
    image: '/imgs/engineer-m-mF3ouZe8aZk-unsplash.jpg',
  },
  {
    name: 'Joe Clifford',
    role: 'Customer Relations',
    image: '/imgs/rayul-_M6gy9oHgII-unsplash.jpg',
  },
])
</script>
