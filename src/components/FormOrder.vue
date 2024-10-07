<template>
  <section id="form-order" class="bg-gray-100 py-16 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4">
    <div class="container mx-auto text-center">
      <h3 class="text-3xl font-semibold mb-8">Form Pemesanan</h3>
      <p class="mb-12 text-lg">Isi formulir di bawah ini untuk memesan layanan kami. Kami akan segera menghubungi Anda!</p>

      <form class="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 dark:bg-gray-800" @submit="sendEmail">
        <div class="mb-4">
          <label for="name" class="block text-left text-lg mb-2">Nama Lengkap</label>
          <input type="text" id="name" name="name" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nama lengkap" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-left text-lg mb-2">Email</label>
          <input type="email" id="email" v-model="email" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan email" />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
          <!-- Menampilkan error email -->
        </div>

        <div class="mb-4">
          <label for="phone" class="block text-left text-lg mb-2">Nomor Telepon</label>
          <input type="tel" id="phone" v-model="phone" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nomor telepon" />
          <span v-if="phoneError" class="text-red-500 text-sm">{{ phoneError }}</span>
          <!-- Menampilkan error telepon -->
        </div>

        <div class="mb-4">
          <label for="message" class="block text-left text-lg mb-2">Pesan / Keterangan</label>
          <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan pesan atau keterangan"></textarea>
        </div>

        <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition duration-300 w-full">Kirim Pesanan</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const email = ref('');
const phone = ref('');
const emailError = ref('');
const phoneError = ref('');

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^\+?[1-9]\d{1,14}$/; // Contoh regex untuk nomor telepon internasional
  return re.test(phone);
};

const sendEmail = (e) => {
  e.preventDefault();

  emailError.value = '';
  phoneError.value = '';

  // Validasi email
  if (!validateEmail(email.value)) {
    emailError.value = 'Format email tidak valid.';
    return;
  }

  // Validasi nomor telepon
  if (!validatePhone(phone.value)) {
    phoneError.value = 'Format nomor telepon tidak valid.';
    return;
  }

  emailjs
    .sendForm('service_w71c4ct', 'template_3rjr2xc', e.target, 'LJee1kFw8oJVWPCAH')
    .then((result) => {
      console.log('Email berhasil dikirim:', result.text);
      alert('Pesanan berhasil dikirim!');
      // Reset form jika perlu
      e.target.reset();
      email.value = '';
      phone.value = '';
    })
    .catch((error) => {
      console.log('Gagal mengirim email:', error.text);
      alert('Gagal mengirim pesanan. Coba lagi.');
    });
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
