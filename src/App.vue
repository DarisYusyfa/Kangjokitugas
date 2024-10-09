<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';

// Menambahkan skrip Tawk.to saat komponen dimount
onMounted(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://embed.tawk.to/6706522e02d78d1a30eeb6fc/1i9ob21sb';
  script.async = true;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.body.appendChild(script);
});
</script>

<style>
/* Tambahkan styling global jika diperlukan */
body {
  margin: 0;
  font-family: 'Inter', sans-serif; /* Ganti dengan font pilihanmu */
}
</style>
