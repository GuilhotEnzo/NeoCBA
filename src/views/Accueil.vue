<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Bienvenue sur Mon Site</h1>
    <div class="prose lg:prose-xl">
      <p class="text-lg mb-4">
        Découvrez un monde d'histoires captivantes et de personnages fascinants.
      </p>
      <p class="text-lg mb-4">
        Explorez nos récits uniques et plongez dans l'univers de nos personnages mémorables.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Nos Récits</h2>
          <p>Parcourez notre collection d'histoires originales.</p>
          <router-link to="/recits" class="inline-block mt-4 text-blue-500 hover:text-blue-700">
            Découvrir les récits →
          </router-link>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Nos Personnages</h2>
          <p>Rencontrez les personnages qui peuplent nos histoires.</p>
          <router-link to="/personnages" class="inline-block mt-4 text-blue-500 hover:text-blue-700">
            Découvrir les personnages →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>