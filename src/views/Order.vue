<template>
  <div class="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-center">Form Pemesanan</h1>
    <form @submit.prevent="submitOrder">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
        <input type="text" id="name" v-model="formData.name" required class="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input type="email" id="email" v-model="formData.email" required class="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full" />
      </div>
      <div class="mb-4">
        <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Layanan</label>
        <select id="service" v-model="formData.service" required class="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full">
          <option value="" disabled>Pilih layanan</option>
          <option value="Jasa Penulisan">Jasa Penulisan</option>
          <option value="Jasa Edit Tugas">Jasa Edit Tugas</option>
          <option value="Jasa Presentasi">Jasa Presentasi</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Pesan Tambahan</label>
        <textarea id="message" v-model="formData.message" rows="4" class="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full"></textarea>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">Kirim Pemesanan</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  service: '',
  message: '',
});

// Fungsi untuk mengirim data pemesanan
const submitOrder = () => {
  // Logika pengiriman data ke backend atau API
  console.log('Data Pemesanan:', formData.value);
  alert('Pemesan telah dikirim!');
  // Reset form setelah pengiriman
  formData.value = {
    name: '',
    email: '',
    service: '',
    message: '',
  };
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
