<template>
  <footer class="bg-gray-800 text-white mt-auto">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">À propos</h3>
          <p>Un site dédié aux histoires et aux personnages.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <p>Email: contact@example.com</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Liens utiles</h3>
          <ul>
            <li><router-link to="/" class="hover:text-blue-300">Accueil</router-link></li>
            <li><router-link to="/recits" class="hover:text-blue-300">Récits</router-link></li>
            <li><router-link to="/personnages" class="hover:text-blue-300">Personnages</router-link></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-8 pt-8 border-t border-gray-700">
        <p>&copy; {{ new Date().getFullYear() }} Mon Site. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>