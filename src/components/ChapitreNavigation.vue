<template>
  <nav class="navigation">
    <router-link v-if="chapitreId > 1" :to="`/${recitType}/${chapitreId - 1}`">Chapitre Précédent</router-link>
    <router-link :to="`/recits`">Liste des chapitres</router-link>
    <router-link v-if="chapitreExiste(chapitreId + 1)" :to="`/${recitType}/${chapitreId + 1}`">Chapitre Suivant
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    chapitreId: {
      type: Number,
      required: true
    },
    chapitreExiste: {
      type: Function,
      required: true
    },
    horsSerie: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    recitType(): string {
      return this.horsSerie ? "hs" : "chapitre";
    }
  }
};
</script>

<style>
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
