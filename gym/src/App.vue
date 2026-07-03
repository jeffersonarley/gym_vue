<template>
  <q-app>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>Gym App</q-toolbar-title>
          <q-space />
          <q-btn flat dense color="white" label="Inicio" to="/" />
        </q-toolbar>
      </q-header>

      <q-page-container class="bg-grey-1">
        <router-view />
      </q-page-container>

    </q-layout>
  </q-app>
</template>

<script setup>
// Layout simple y funcional con Quasar
</script>

<style>
html,
body,
#app {
  min-height: 100vh;
  background: #f5f7fb;
}

q-page {
  min-height: calc(100vh - 112px);
}

.muscle-card {
  min-height: 170px;
}
</style>