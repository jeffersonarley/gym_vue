<template>
  <q-page class="flex flex-center bg-grey-1 q-pa-md">
    <div class="full-width" style="max-width: 960px">
      <q-banner class="bg-primary text-white q-mb-lg">
        <div class="text-h6 q-mb-sm">Bienvenido a Gym App</div>
        <div class="text-subtitle2">Explora los grupos musculares y ve ejercicios con estilo Quasar.</div>
      </q-banner>

      <div class="row justify-center q-gutter-md">
        <div v-for="musculo in musculos" :key="musculo.id" class="col-12 col-sm-6 col-md-3">
          <q-card flat bordered shadow-2 rounded-borders class="q-pa-md">
            <q-card-section class="row items-center justify-between">
              <div>
                <div class="text-h6 q-mb-xs">{{ musculo.nombre }}</div>
                <div class="text-caption text-grey-7">4 ejercicios disponibles</div>
              </div>
              <q-icon :name="musculo.icono" size="42px" class="text-primary" />
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn
                tag="router-link"
                flat
                color="primary"
                label="Ver ejercicios"
                icon="arrow_forward"
                :to="{ path: `/${musculo.id}/ejercicio1` }"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const musculos = [
  {
    id: 'brazos',
    nombre: 'Brazos',
    icono: 'fitness_center'
  },
  {
    id: 'pecho',
    nombre: 'Pecho',
    icono: 'fitness_center'
  },
  {
    id: 'espalda',
    nombre: 'Espalda',
    icono: 'accessibility'
  },
  {
    id: 'pierna',
    nombre: 'Pierna',
    icono: 'directions_run'
  }
]
</script>