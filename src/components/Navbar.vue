<template>
  <header :class="{ dark: isDarkMode }" class="bg-gray-800 text-white py-2 px-4 shadow-md dark:bg-gray-900 sticky top-0 z-50">
    <nav class="container mx-auto flex justify-between items-center">
      <!-- Dark Mode Toggle Button (on mobile, move to left) -->
      <button @click="toggleDarkMode" class="md:hidden">
        <span v-if="isDarkMode" class="text-white text-2xl">🌙</span>
        <span v-else class="text-gray-300 dark:text-yellow-400 text-2xl">🌞</span>
      </button>

      <!-- Logo (only visible on desktop) -->
      <div class="flex items-center space-x-2 md:flex">
        <img src="/images/main.png" class="h-12 w-12 md:h-14 md:w-14" alt="Logo UoneJOKI" />
        <h1 class="text-2xl font-bold tracking-wide hidden md:block">UoneJOKI</h1>
      </div>

      <!-- Navbar Links (Desktop) -->
      <ul class="hidden md:flex space-x-8 text-lg font-medium">
        <li><router-link to="/" class="hover:text-gray-300 transition duration-300 dark:hover:text-gray-400">Beranda</router-link></li>
        <li><router-link to="/services" class="hover:text-gray-300 transition duration-300 dark:hover:text-gray-400">Layanan</router-link></li>
        <li><router-link to="/testimonials" class="hover:text-gray-300 transition duration-300 dark:hover:text-gray-400">Testimoni</router-link></li>
        <li><router-link to="/contact" class="hover:text-gray-300 transition duration-300 dark:hover:text-gray-400">Kontak</router-link></li>
      </ul>

      <!-- Dark Mode Toggle Button (on desktop) -->
      <button @click="toggleDarkMode" class="hidden md:flex">
        <span v-if="isDarkMode" class="text-white text-2xl">🌙</span>
        <span v-else class="text-gray-300 dark:text-yellow-400 text-2xl">🌞</span>
        <span class="ml-2 text-sm font-medium hidden lg:inline">Dark Mode</span>
      </button>

      <!-- Mobile Menu Button (Hamburger or X) -->
      <button @click="toggleMenu" class="md:hidden">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-gray-800 text-white md:hidden">
      <ul class="flex flex-col space-y-2 p-4">
        <li><router-link to="/" @click="toggleMenu" class="hover:text-gray-300">Beranda</router-link></li>
        <li><router-link to="/services" @click="toggleMenu" class="hover:text-gray-300">Layanan</router-link></li>
        <li><router-link to="/testimonials" @click="toggleMenu" class="hover:text-gray-300">Testimoni</router-link></li>
        <li><router-link to="/contact" @click="toggleMenu" class="hover:text-gray-300">Kontak</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);
const isMenuOpen = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark', isDarkMode.value);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
