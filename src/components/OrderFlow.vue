<template>
  <div class="container mx-auto my-10 flex flex-col items-center lg:flex-row lg:items-start">
    <!-- Card untuk menampung Lottie dan diagram alur pemesanan -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center lg:flex-row lg:items-start lg:p-10 w-full lg:w-[80%]">
      <!-- Elemen untuk animasi Lottie -->
      <dotlottie-player src="/images/animation.json" background="transparent" speed="1" class="w-64 h-64 lg:w-[600px] lg:h-[600px]" loop autoplay></dotlottie-player>

      <!-- Diagram alur pemesanan -->
      <div class="ml-0 lg:ml-40 mt-10 lg:mt-28 flex flex-col items-center lg:items-start">
        <!-- Memperlebar margin kiri -->
        <!-- Menambah margin bawah -->
        <div class="flex flex-col items-center lg:items-start">
          <div class="flex items-center mb-8">
            <!-- Memperlebar jarak antar elemen -->
            <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg">1</div>
            <span class="ml-6 lg:ml-10 text-lg lg:text-xl text-gray-800 dark:text-gray-200">Chat WA Admin</span>
            <!-- Margin tambahan untuk desktop -->
          </div>
          <div class="flex items-center mb-8">
            <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg">2</div>
            <span class="ml-6 lg:ml-10 text-lg lg:text-xl text-gray-800 dark:text-gray-200">Konsultasi</span>
            <!-- Margin tambahan untuk desktop -->
          </div>
          <div class="flex items-center mb-8">
            <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg">3</div>
            <span class="ml-6 lg:ml-10 text-lg lg:text-xl text-gray-800 dark:text-gray-200">Pembayaran</span>
            <!-- Margin tambahan untuk desktop -->
          </div>
          <div class="flex items-center mb-8">
            <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg">4</div>
            <span class="ml-6 lg:ml-10 text-lg lg:text-xl text-gray-800 dark:text-gray-200">Proses Pengerjaan</span>
            <!-- Margin tambahan untuk desktop -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Tidak ada script yang diperlukan di sini
</script>

<style scoped>
.container {
  display: flex; /* Flex untuk menyusun Lottie dan diagram */
  justify-content: center; /* Centering konten */
  position: relative; /* Positioning untuk garis penghubung */
}
</style>
