<template>
  <div class="font-sans min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Tambahkan kelas font-sans -->
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
/* Mengatur font default untuk seluruh teks di dalam layout ini */
body {
  font-family: 'Poppins', sans-serif; /* Menggunakan Poppins */
}
</style>
