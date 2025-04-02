<template>
  <div class="chapitre">
    <nav class="navigation">
      <router-link v-if="chapitreId > 1" :to="`/chapitre/${chapitreId - 1}/${type}`">Chapitre Précédent</router-link>
      <router-link v-if="chapitreId = 1" :to="`/recits`">Liste des chapitres</router-link>
      <router-link v-if="chapitreExiste(chapitreId + 1)" :to="`/chapitre/${chapitreId + 1}/${type}`">Chapitre Suivant</router-link>
    </nav>

    <h1>Chapitre {{ chapitreId }} - {{ titreChapitre }}</h1>

    <p v-if="contenuChapitre" v-html="contenuChapitre.replace(/\n/g, '<br>')"></p>
    <p v-else>Chapitre non trouvé.</p>

    <nav class="navigation">
      <router-link v-if="chapitreId > 1" :to="`/chapitre/${chapitreId - 1}/${type}`">Chapitre Précédent</router-link>
      <router-link v-if="chapitreId = 1" :to="`/recits`">Liste des chapitres</router-link>
      <router-link v-if="chapitreExiste(chapitreId + 1)" :to="`/chapitre/${chapitreId + 1}/${type}`">Chapitre Suivant</router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ChapitreNavigation from "../components/ChapitreNavigation.vue";

const route = useRoute();
var chapitreId = computed(() => Number(route.params.id));
var type = computed(() => String(route.params.type));

const chapitres = ref({});
const titreChapitre = computed(() => chapitres.value[chapitreId.value]?.titre || "Titre inconnu");
const contenuChapitre = computed(() => chapitres.value[chapitreId.value]?.contenu || null);

const chargerChapitres = async () => {
  try {
    const response = await fetch("json/" + type.value + '.json');
    chapitres.value = await response.json();
  } catch (error) {
    console.error("Erreur lors du chargement des chapitres.json :", error, type.value+'.json');
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