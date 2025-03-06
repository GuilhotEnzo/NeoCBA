<template>
  <div class="max-w-6xl mx-auto px-4 py-8 chapitre">
    <h1 class="text-4xl font-bold mb-6">Nos Récits</h1>
    <div v-if="recits.length === 0" class="text-center text-gray-400">
      Chargement des chapitres...
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(recit, index) in recits" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{ recit.titre }}</h2>
          <router-link :to="`/chapitre/${recit.id}`" class="text-blue-500 hover:text-blue-700 link-chap">Lire le chapitre</router-link>
        </div>
      </div>
    </div>

    <h1 id="hs-titre" class="text-4xl font-bold mb-6">Nos hors-séries</h1>
    <div v-if="hs.length === 0" class="text-center text-gray-400">
      Chargement des hors-séries...
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(hs, index) in hs" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{ hs.titre }}</h2>
          <router-link :to="`/hs/${hs.id}`" class="text-blue-500 hover:text-blue-700 link-chap">Lire le hors-série</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const recits = ref([]);
const hs = ref([]);

const chargerChapitres = async () => {
  try {
    const response = await fetch('json/chapitres.json');
    const data = await response.json();

    recits.value = Object.keys(data).map(id => ({
      id,
      titre: `Chapitre ${id} - ${data[id].titre}`,
    }));
  } catch (error) {
    console.error("Erreur lors du chargement des chapitres :", error);
  }
  try {
    const response2 = await fetch('json/hs.json');
    const data2 = await response2.json();

    hs.value = Object.keys(data2).map(id => ({
      id,
      titre: `Hors-série ${id} - ${data2[id].titre}`,
    }))
  }catch (error) {
    console.error("Erreur lors du chargement des hors-séries :", error);
  }
};


onMounted(chargerChapitres);
</script>

<style>
  #hs-titre {
    margin: 50px;
  }
</style>