<template>
  <div>
    <h1 class="text-3xl font-bold text-center my-8">Layanan Kami</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard v-for="service in services" :key="service.id" :title="service.title" :description="service.description" :price="service.price" />
    </div>
  </div>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue';

// Daftar layanan yang ditampilkan di halaman Services
const services = [
  {
    id: 1,
    title: 'Jasa Penulisan',
    description: 'Layanan penulisan tugas dengan kualitas tinggi.',
    price: 'Rp100.000',
  },
  {
    id: 2,
    title: 'Jasa Edit Tugas',
    description: 'Edit tugas untuk meningkatkan kualitas dan kesesuaian.',
    price: 'Rp75.000',
  },
  {
    id: 3,
    title: 'Jasa Presentasi',
    description: 'Membuat presentasi menarik dan informatif.',
    price: 'Rp150.000',
  },
  {
    id: 4,
    title: 'Jasa Penyelesaian Tugas',
    description: 'Menyelesaikan tugas-tugas akademik dengan baik.',
    price: 'Rp200.000',
  },
  {
    id: 5,
    title: 'Jasa Konsultasi',
    description: 'Konsultasi tugas dengan profesional.',
    price: 'Rp50.000',
  },
  // Tambahkan layanan lain sesuai kebutuhan
];
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
