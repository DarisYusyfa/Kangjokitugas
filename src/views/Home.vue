<template>
  <div>
    <HeroSection />

    <!-- Layanan Kami Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Layanan Kami</h3>
      <ServiceCard />
    </section>

    <!-- Alur Pemesanan Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Alur Pemesanan</h3>
      <OrderFlow />
    </section>

    <!-- Apa Kata Mereka Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Apa Kata Mereka</h3>
      <TestimonialSlide />
    </section>

    <!-- Daftar Harga Section -->
    <PriceList />

    <!-- Form Pemesanan Section -->
    <FormOrder />

    <!-- Peringatan Bergabung -->
    <div class="flex justify-center items-center mt-8 px-3">
      <font-awesome-icon icon="volume-up" class="text-2xl mr-2 dark:text-white text-darkblue"></font-awesome-icon>
      <div class="marquee">
        <p class="text-xl text-center text-white dark:text-gray-200">Bagi Yang Ingin Bergabung Dengan Kami Sebagai Worker Silahkan Isi Form dan Deskripsi</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import ServiceCard from '../components/ServiceCard.vue';
import TestimonialSlide from '../components/TestimonialSlide.vue';
import OrderFlow from '../components/OrderFlow.vue';
import PriceList from '../components/PriceList.vue';
import FormOrder from '../components/FormOrder.vue';

// Tambahkan script Tawk.to di sini
const tawkScript = `
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6706522e02d78d1a30eeb6fc/1i9ob21sb';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();
`;

// Menjalankan script Tawk.to
const runScript = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = tawkScript;
  document.body.appendChild(script);
};

runScript();
</script>

<style scoped>
.text-darkblue {
  color: black; /* Ganti dengan kode warna biru gelap yang Anda inginkan */
}

/* Styling untuk marquee */
.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%; /* Lebar penuh untuk tampilan yang lebih baik */
  margin: 0 20px; /* Tambahkan margin untuk ruang di kedua sisi */
}

.marquee p {
  display: inline-block;
  animation: marquee 12s linear infinite; /* Durasi animasi dan pengulangan */
}

@keyframes marquee {
  0% {
    transform: translateX(100%); /* Mulai dari luar kanan */
  }
  100% {
    transform: translateX(-100%); /* Berhenti di luar kiri */
  }
}
</style>
