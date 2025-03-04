<template>
  <div class="chapitre">
    <h1>Chapitre {{ chapitreId }} - {{ titreChapitre }}</h1>
    <p v-if="contenuChapitre" v-html="contenuChapitre.replace(/\n/g, '<br>')"></p>
    <p v-else>Chapitre non trouvé.</p>

    <nav class="navigation">
      <router-link v-if="chapitreId > 1" :to="`/chapitre/${chapitreId - 1}`">Chapitre Précédent</router-link>
      <router-link v-if="chapitreId = 1" :to="`/recits`">Liste des chapitres</router-link>
      <router-link v-if="chapitreExiste(chapitreId + 1)" :to="`/chapitre/${chapitreId + 1}`">Chapitre Suivant</router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const chapitreId = computed(() => Number(route.params.id));

const chapitres = ref({});
const titreChapitre = computed(() => chapitres.value[chapitreId.value]?.titre || "Titre inconnu");
const contenuChapitre = computed(() => chapitres.value[chapitreId.value]?.contenu || null);

const chargerChapitres = async () => {
  try {
    const response = await fetch('chapitres.json');
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