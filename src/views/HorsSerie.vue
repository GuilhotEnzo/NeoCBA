<template>
  <div class="chapitre">
    <ChapitreNavigation :chapitreId="chapitreId" :chapitreExiste="chapitreExiste" :hors-serie="true" />

    <h1>Chapitre {{ chapitreId }} - {{ titreChapitre }}</h1>
    <p v-if="contenuChapitre" v-html="contenuChapitre.replace(/\n/g, '<br>')"></p>
    <p v-else>Chapitre non trouvé.</p>

    <ChapitreNavigation :chapitreId="chapitreId" :chapitreExiste="chapitreExiste" :hors-serie="true" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ChapitreNavigation from "../components/ChapitreNavigation.vue";

const route = useRoute();
const chapitreId = computed(() => Number(route.params.id));

const chapitres = ref({});
const titreChapitre = computed(() => chapitres.value[chapitreId.value]?.titre || "Titre inconnu");
const contenuChapitre = computed(() => chapitres.value[chapitreId.value]?.contenu || null);

const chargerChapitres = async () => {
  try {
    const response = await fetch('hs.json');
    chapitres.value = await response.json();
  } catch (error) {
    console.error("Erreur lors du chargement des chapitres.json :", error);
  }
};

const chapitreExiste = (id) => chapitres.value[id] !== undefined;

onMounted(chargerChapitres);
</script>

<style scoped>
.chapitre-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
</style>