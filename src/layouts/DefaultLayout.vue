<template>
  <div class="font-sans min-h-screen bg-gray-700 dark:bg-gray-900">
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
body {
  font-family: 'Fredoka', sans-serif; /* Menggunakan Poppins */
}
</style>
