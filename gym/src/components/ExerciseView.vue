<template>
  <q-page class="bg-grey-1">
    <q-parallax :src="exercise.image || gradientBg" height="280">
      <div class="absolute-top" style="left: 0; right: 0; top: 0;">
        <q-toolbar class="bg-transparent text-white q-pa-none">
          <q-btn flat dense round icon="arrow_back" @click="router.back()" class="q-ml-sm" />
          <q-toolbar-title class="text-white">Ejercicio</q-toolbar-title>
        </q-toolbar>
      </div>

      <div class="absolute-bottom q-pa-md column" style="background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%);">
        <div class="row items-center justify-between">
          <div>
            <div class="text-h4 text-white">{{ exercise.nombre }}</div>
            <div class="text-subtitle2 text-white-8">{{ muscleName }}</div>
          </div>
          <q-chip color="accent" text-color="white" class="q-mr-sm">{{ exercise.nivel }}</q-chip>
        </div>
      </div>
    </q-parallax>

    <div class="q-pa-md" style="max-width: 1100px; margin: 0 auto;">
      <q-card flat class="shadow-2 rounded-borders">
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-7">
              <div class="video-wrapper q-mb-md">
                <q-video class="video-card" :src="exercise.video" ratio="16/9" />
              </div>

              <div class="q-mt-md">
                <div class="text-h6">Descripción</div>
                <div class="text-body1 text-grey-8 q-mt-sm">{{ exercise.descripcion }}</div>
              </div>
            </div>

            <div class="col-12 col-md-5">
              <q-card class="shadow-1" bordered>
                <q-card-section>
                  <div class="text-h6 q-mb-sm">Instrucciones</div>
                  <q-expansion-item expand-separator icon="directions_run" label="Ver pasos" default-open>
                    <div>
                      <div v-for="(step, i) in exercise.pasos" :key="i" class="row items-start q-mb-sm">
                        <q-avatar size="36px" class="bg-primary text-white q-mr-sm">{{ i+1 }}</q-avatar>
                        <div class="text-body2">{{ step }}</div>
                      </div>
                    </div>
                  </q-expansion-item>
                </q-card-section>
              </q-card>

              <div class="q-mt-md">
                <q-btn
                  unelevated
                  :color="buttonColor"
                  :icon="buttonIcon"
                  :label="buttonLabel"
                  class="full-width"
                  @click="toggleCompleted"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="fixed-bottom row no-wrap q-pa-md items-center" style="left:0;right:0;justify-content:space-between;pointer-events:auto;">
      <div class="q-ml-sm">
        <q-btn round dense unelevated color="dark" text-color="white" icon="arrow_back" @click="goPrev" :disable="!hasPrev" />
      </div>
      <div class="q-mr-sm">
        <q-btn round dense unelevated color="accent" text-color="white" icon="arrow_forward" @click="goNext" :disable="!hasNext" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Notify } from 'quasar'
import ejercicios from '../data/ejercicios.js'

const props = defineProps({
  muscle: { type: String, required: true },
  index: { type: Number, required: true }
})

const router = useRouter()
const isCompleted = ref(false)

const muscle = props.muscle
const idx = props.index

const muscleData = ejercicios[muscle] || { nombre: 'Desconocido', ejercicios: [] }
const exercise = muscleData.ejercicios[idx - 1] || { nombre: 'Ejercicio no encontrado', descripcion: '', video: '', pasos: [], nivel: '' }

const muscleName = muscleData.nombre || ''
const count = muscleData.ejercicios.length

const hasPrev = computed(() => idx > 1)
const hasNext = computed(() => idx < count)
const buttonColor = computed(() => (isCompleted.value ? 'positive' : 'primary'))
const buttonIcon = computed(() => (isCompleted.value ? 'check' : 'play_arrow'))
const buttonLabel = computed(() => (isCompleted.value ? 'Completado' : 'Marcar como hecho'))

function goPrev () {
  if (idx > 1) {
    router.push(`/${muscle}/ejercicio${idx - 1}`)
  }
}

function goNext () {
  if (idx < count) {
    router.push(`/${muscle}/ejercicio${idx + 1}`)
  }
}

function toggleCompleted () {
  if (!isCompleted.value) {
    isCompleted.value = true
    Notify.create({
      message: '¡Ejercicio registrado con éxito!',
      color: 'positive',
      icon: 'check_circle',
      position: 'top-right',
      timeout: 2500
    })
  }
}

const gradientBg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="600"><rect width="100%" height="100%" fill="%23022c3a"/></svg>'
</script>

<style scoped>
.video-wrapper {
  border-radius: 16px;
  overflow: hidden;
  background: #071923;
  box-shadow: 0 14px 45px rgba(1,22,32,0.18);
}
.video-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0,0,0,0.18);
}
.rounded-borders {
  border-radius: 16px;
  overflow: hidden;
}
.fixed-bottom {
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
}
</style>
