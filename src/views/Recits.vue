<template>
  <div class="max-w-6xl mx-auto px-4 py-8 chapitre">
    <h1 class="text-4xl font-bold mb-10">Nos Récits</h1>
    <div v-if="recits.length === 0" class="text-center text-gray-400">
      Chargement des chapitres...
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(chapitre, index) in recits" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <div class="p-6 flex flex-col flex-grow">
          <h2 class="text-xl font-semibold mb-2 recit-numero">Chapitre {{ chapitre.id }}</h2>
          <div class="separator"></div>
          <h2 class="text-xl font-semibold mb-2 recit-titre">{{ chapitre.titre }}</h2>
          <div class="mt-auto">
            <router-link :to="`/chapitre/${chapitre.id}`" class="text-blue-500 hover:text-blue-700 link-chap">
              Lire le chapitre
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-4xl font-bold m-10">Nos hors-séries</h1>
    <div v-if="hs.length === 0" class="text-center text-gray-400">
      Chargement des hors-séries...
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(hs, index) in hs" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <div class="p-6 flex flex-col flex-grow">
          <h2 class="text-xl font-semibold mb-2 recit-numero">Hors-série {{ hs.id }}</h2>
          <div class="separator"></div>
          <h2 class="text-xl font-semibold mb-2 recit-titre">{{ hs.titre }}</h2>
          <div class="mt-auto">
            <router-link :to="`/hs/${hs.id}`" class="text-blue-500 hover:text-blue-700 link-chap">
              Lire le hors-série
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const recits = ref([]);
const hs = ref([]);

const chargerChapitres = async () => {
  try {
    const response = await fetch('json/chapitres.json');
    const data = await response.json();

    recits.value = Object.keys(data).map(id => ({
      id,
      titre: data[id].titre,
    }));
  } catch (error) {
    console.error("Erreur lors du chargement des chapitres :", error);
  }

  try {
    const response2 = await fetch('json/hors-series.json');
    const data2 = await response2.json();

    hs.value = Object.keys(data2).map(id => ({
      id,
      titre: data2[id].titre,
    }));
  } catch (error) {
    console.error("Erreur lors du chargement des hors-séries :", error);
  }
};

onMounted(chargerChapitres);
</script>

<style>

.recit-numero {
  text-align: center;
}

.recit-titre {
  text-align: left;
}

.separator {
  height: 2px;
  background-color: #ddd;
  width: 50%;
  margin: 3px auto 9px auto;
}

</style>
