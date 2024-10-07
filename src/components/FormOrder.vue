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
          <input type="email" id="email" name="email" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan email" />
        </div>

        <div class="mb-4">
          <label for="phone" class="block text-left text-lg mb-2">Nomor Telepon</label>
          <input type="tel" id="phone" name="phone" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nomor telepon" />
        </div>

        <div class="mb-4">
          <label for="message" class="block text-left text-lg mb-2">Pesan / Keterangan</label>
          <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan pesan atau keterangan"></textarea>
        </div>

        <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition duration-300 w-full">Kirim Pesanan</button>
      </form>
    </div>
  </section>
  <div class="flex justify-center items-center mt-8">
    <font-awesome-icon icon="volume-up" class="text-2xl mr-2"></font-awesome-icon>
    <!-- Ikon pengeras suara -->
    <p class="text-xl text-center text-white dark:text-gray-200">Bagi Yang Ingin Bergabung Sebagai Worker Dengan Kami Silahkan Isi Form dan Isi Deskripsi</p>
  </div>
</template>

<script setup>
// Tidak perlu menambahkan script setup lagi untuk ikon di sini
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
