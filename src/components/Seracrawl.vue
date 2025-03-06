<template>
  <aside>
    <img src="/img/seracrawl.png" alt="Publicité">
    <p>image alt</p>
  </aside>
</template>

<style scoped>
aside {
  position: fixed;
  right: 12px;
  top: 150px;
  width: 250px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 0;
}

aside img {
  width: 100%;
  border-radius: 4px;
}

aside p {
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}
</style>