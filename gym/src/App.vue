<template>
  <q-app>
    <q-layout view="lHh Lpr lFf">
      <q-header class="app-header">
        <q-toolbar class="app-toolbar">
          <div class="brand">
            <q-icon name="fitness_center" size="24px" class="brand-icon" />
            <div class="brand-text">
              <div class="brand-name">Gym App</div>
              <div class="brand-subtitle">Tu rutina en orden</div>
            </div>
          </div>
          <q-space />
          <q-btn flat dense round icon="home" to="/" class="nav-btn" />
        </q-toolbar>
      </q-header>

      <q-page-container class="app-page-container">
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
  background: #04141d;
  color: #f2ede4;
}

q-page {
  min-height: calc(100vh - 112px);
}

.app-header {
  background: linear-gradient(90deg, rgba(232, 98, 44, 0.96) 0%, rgba(108, 142, 191, 0.96) 50%, rgba(4, 20, 29, 0.96) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
}

.app-toolbar {
  min-height: 64px;
  padding: 0 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  color: #fff;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  padding: 8px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-subtitle {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.nav-btn {
  border-radius: 10px;
}

.app-page-container {
  background: transparent;
}

.muscle-card {
  min-height: 170px;
}
</style>