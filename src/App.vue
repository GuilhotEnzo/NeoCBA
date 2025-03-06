<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Seracrawl from "./components/Seracrawl.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar/>
    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <Seracrawl/>

    <Footer/>
  </div>
</template>
