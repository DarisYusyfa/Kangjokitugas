<template>
  <div class="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-center">Kontak Kami</h1>
    <p class="mb-4 text-center">Jika Anda memiliki pertanyaan atau ingin menghubungi kami, silakan isi formulir di bawah ini:</p>
    <form @submit.prevent="submitContact">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
        <input type="text" id="name" v-model="contactData.name" required class="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input type="email" id="email" v-model="contactData.email" required class="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full" />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Pesan</label>
        <textarea id="message" v-model="contactData.message" rows="4" class="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full"></textarea>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">Kirim Pesan</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contactData = ref({
  name: '',
  email: '',
  message: '',
});

// Fungsi untuk mengirim data kontak
const submitContact = () => {
  // Logika pengiriman data ke backend atau API
  console.log('Data Kontak:', contactData.value);
  alert('Pesan telah dikirim!');
  // Reset form setelah pengiriman
  contactData.value = {
    name: '',
    email: '',
    message: '',
  };
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
