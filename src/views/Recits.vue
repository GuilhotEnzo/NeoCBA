<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Nos Récits</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(recit, index) in recits" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{ recit.titre }}</h2>
          <p class="text-gray-600 mb-4">{{ recit.description }}</p>
          <a href="#" class="text-blue-500 hover:text-blue-700">Lire la suite →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const recits = [
  {
    titre: "Le Début de l'Aventure",
    description: "Chapitre 1 - Découvrez comment tout a commencé..."
  },
  {
    titre: "La Quête Continue",
    description: "Chapitre 2 - Les héros font face à de nouveaux défis..."
  },
  {
    titre: "L'Ultime Combat",
    description: "Chapitre 3 - Le moment de vérité approche..."
  }
]
</script>