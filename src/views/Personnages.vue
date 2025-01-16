<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Nos Personnages</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(personnage, index) in personnages" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{ personnage.nom }}</h2>
          <p class="text-gray-600 mb-4">{{ personnage.description }}</p>
          <a href="#" class="text-blue-500 hover:text-blue-700">En savoir plus →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const personnages = [
  {
    nom: "Héros Principal",
    description: "Le protagoniste de notre histoire, brave et déterminé..."
  },
  {
    nom: "Sage Mentor",
    description: "Guide et conseiller, détenteur de secrets ancestraux..."
  },
  {
    nom: "Antagoniste",
    description: "L'adversaire redoutable qui défie nos héros..."
  }
]
</script>