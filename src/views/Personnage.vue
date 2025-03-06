<template>
  <div class="chapitre">
    <h1>{{ nompersonnage }}</h1>
    <p v-if="contenupersonnage" v-html="contenupersonnage.replace(/\n/g, '<br>')"></p>
    <p v-else>personnage non trouvé.</p>
    <img :src="imgpersonnage" :alt="`Design de ${nompersonnage}`"/>

    <nav class="navigation">
      <router-link v-if="personnageId > 1" :to="`/personnage/${personnageId - 1}`">personnage Précédent</router-link>
      <router-link v-if="personnageId = 1" :to="`/personnages`">Liste des personnages</router-link>
      <router-link v-if="personnageExiste(personnageId + 1)" :to="`/personnage/${personnageId + 1}`">personnage Suivant</router-link>
    </nav>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const personnageId = computed(() => Number(route.params.id));

const personnages = ref({});
const nompersonnage = computed(() => personnages.value[personnageId.value]?.nom || "nom inconnu");
const contenupersonnage = computed(() => personnages.value[personnageId.value]?.contenu || null);
const imgpersonnage = computed(() => personnages.value[personnageId.value]?.img || null);

const chargerpersonnages = async () => {
  try {
    const response = await fetch('personnages.json');
    personnages.value = await response.json();
  } catch (error) {
    console.error("Erreur lors du chargement des personnages.json :", error);
  }
};

const personnageExiste = (id) => personnages.value[id] !== undefined;

onMounted(chargerpersonnages);
</script>

<style scoped>
img {
  margin-top: 30px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.navigation a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
</style>