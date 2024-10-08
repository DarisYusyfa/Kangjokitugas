<template>
  <section id="home" class="bg-gray-900 py-40 text-center relative overflow-hidden text-white dark:bg-gray-800 px-4">
    <div class="container mx-auto relative z-10">
      <h2 class="text-5xl font-bold mb-4">Jasa Joki Tugas Sekolah Terpercaya</h2>
      <p class="text-2xl mb-8">Selesaikan tugas SMK kamu dengan cepat dan tepat!</p>

      <a :class="isDarkMode ? 'text-gray-200' : 'text-black'" href="https://wa.me/6285860639317" target="_blank" rel="noopener noreferrer">
        <button class="bg-blue-600 py-3 px-8 rounded hover:bg-blue-500 transition duration-300 text-lg">Pesan Sekarang</button>
      </a>
    </div>

    <div class="absolute inset-x-0 bottom-0 mb-0 flex flex-col items-center z-20 pb-6">
      <span class="text-sm mb-2">Sponsored by</span>
      <div class="flex justify-center">
        <img src="/images/logoR.png" class="h-6 mx-2 md:h-12" alt="Ruang Guru" />
        <img src="/images/logoK.png" class="h-6 mx-2 md:h-12" alt="Zenius" />
        <img src="/images/logoQ.svg" class="h-6 mx-2 md:h-12" alt="Quipper" />
        <img src="/images/logoZ.jpg" class="h-6 mx-2 md:h-12" alt="GitHub" />
        <img src="/images/logots.png" class="h-6 mx-2 md:h-12" alt="P&G" />
        <img src="/images/logoS.png" class="h-6 mx-2 md:h-12" alt="VSCode" />
      </div>
    </div>

    <div class="absolute inset-0 bg-cover bg-center opacity-50 z-0" style="background-image: url('/images/bg.jpg')"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);
</script>

<style scoped></style>
