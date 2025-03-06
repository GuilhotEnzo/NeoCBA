<template>
  <div class="max-w-6xl mx-auto px-4 py-8 chapitre">
    <h1 class="text-4xl font-bold mb-6">Les personnages</h1>
    <div v-if="perso.length === 0" class="text-center text-gray-400">
      Chargement des personnages...
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(psg, index) in perso" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{ psg.nom }}</h2>
          <router-link :to="`/personnage/${psg.id}`" class="text-blue-500 hover:text-blue-700 link-chap">Consulter le personnage</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const perso = ref([]);

const chargerChapitres = async () => {
  try {
    const response = await fetch('personnages.json');
    const data = await response.json();

    perso.value = Object.keys(data).map(id => ({
      id,
      nom: data[id].nom,
      contenu: data[id].contenu,
    }));
  } catch (error) {
    console.error("Erreur lors du chargement des chapitres :", error);
  }
};


onMounted(chargerChapitres);
</script>

<style>
#hs-titre {
  margin: 50px;
}
</style>