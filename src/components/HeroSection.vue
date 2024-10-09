<template>
  <section id="home" :class="isDarkMode ? 'bg-gray-900 text-white dark' : 'bg-white text-black'" class="py-40 text-center relative overflow-hidden px-4">
    <!-- Teks greeting dan emoji lambaian di sebelah kiri atas -->
    <transition name="text-slide">
      <div v-if="showGreeting" class="absolute top-4 left-4 z-20 flex items-center space-x-2">
        <span class="text-lg font-bold">{{ greetingMessage }}</span>
        <span class="text-l wave-hand">👋</span>
      </div>
    </transition>

    <div class="container mx-auto relative z-10">
      <h2 class="text-5xl font-bold mb-4">Jasa Joki Tugas Sekolah Terpercaya</h2>
      <p class="text-2xl mb-8">Selesaikan tugas SMK kamu dengan cepat dan tepat!</p>

      <a :class="isDarkMode ? 'text-gray-200' : 'text-black'" href="https://wa.me/6285860639317" target="_blank" rel="noopener noreferrer">
        <button class="bg-blue-600 py-3 px-8 rounded hover:bg-blue-500 transition duration-300 text-lg">Pesan Sekarang</button>
      </a>
    </div>

    <div class="absolute inset-x-0 bottom-0 mb-0 flex flex-col items-center z-20 pb-6">
      <span class="text-sm mb-2">Sponsored by</span>
      <div class="flex justify-center">
        <img src="/images/logoR.png" class="h-6 mx-2 md:h-12" alt="Ruang Guru" />
        <img src="/images/logoK.png" class="h-6 mx-2 md:h-12" alt="Zenius" />
        <img src="/images/logoQ.svg" class="h-6 mx-2 md:h-12" alt="Quipper" />
        <img src="/images/logoZ.jpg" class="h-6 mx-2 md:h-12" alt="GitHub" />
        <img src="/images/logots.png" class="h-6 mx-2 md:h-12" alt="P&G" />
        <img src="/images/logoS.png" class="h-6 mx-2 md:h-12" alt="VSCode" />
      </div>
    </div>

    <div class="absolute inset-0 bg-cover bg-center opacity-50 z-0" style="background-image: url('/images/bg.jpg')"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Dark mode state
const isDarkMode = ref(true); // Set default to dark mode

// Greeting message state
const greetingMessage = ref('');
const showGreeting = ref(true); // State for controlling visibility of greeting

const setGreetingMessage = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    greetingMessage.value = 'Hi, Selamat Pagi!';
  } else if (hour >= 12 && hour < 15) {
    greetingMessage.value = 'Hi, Selamat Siang!';
  } else if (hour >= 15 && hour < 18) {
    greetingMessage.value = 'Hi, Selamat Sore!';
  } else {
    greetingMessage.value = 'Hi, Selamat Malam!';
  }
};

// Set dark mode preference and greeting message on mount
onMounted(() => {
  // Check if user has saved dark mode preference
  const savedMode = localStorage.getItem('isDarkMode');

  // If there is a saved preference, use it; otherwise, default to dark mode
  if (savedMode !== null) {
    isDarkMode.value = JSON.parse(savedMode);
  } else {
    isDarkMode.value = true; // Default to dark mode
  }

  setGreetingMessage();

  // Hide greeting and emoji after 30 seconds
  setTimeout(() => {
    showGreeting.value = false;
  }, 30000); // 30 seconds delay
});

// Function to toggle dark mode and save preference
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode.value));
};
</script>

<style scoped>
/* Animasi teks masuk dan keluar */
.text-slide-enter-active,
.text-slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.text-slide-enter {
  opacity: 0;
  transform: translateY(-20px); /* Slide in from above */
}

.text-slide-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Slide out downward */
}

/* Animasi lambaian tangan */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wave-hand {
  display: inline-block;
  animation: wave 2s infinite ease-in-out; /* Tangan melambai setiap 2 detik secara terus menerus */
}
</style>
