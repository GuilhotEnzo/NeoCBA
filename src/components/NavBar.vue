<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div class="flex items-center py-4">
            <router-link to="/" class="text-xl font-semibold">Mon Site</router-link>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <router-link to="/" class="py-4 px-2 hover:text-blue-500">Accueil</router-link>
          <router-link to="/recits" class="py-4 px-2 hover:text-blue-500">Récits</router-link>
          <router-link to="/personnages" class="py-4 px-2 hover:text-blue-500">Personnages</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>