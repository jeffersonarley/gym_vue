 <template>
  <q-page class="exercise-page" :style="{ '--accent': accent }">
    <div class="hero exercise-hero">
      <div class="hero-eyebrow">Rutina · {{ muscleName }}</div>
      <h1 class="hero-title">{{ exercise.nombre }}</h1>
      <p class="hero-sub">Sigue el video y completa cada paso. El progreso se guarda automáticamente.</p>
      <div class="hero-meta row items-center q-gutter-sm">
        <q-chip outline text-color="white" :style="{ borderColor: accent, backgroundColor: 'rgba(255,255,255,0.08)' }" :label="`Nivel ${exercise.nivel}`" />
        <q-chip outline text-color="white" :style="{ borderColor: accent, backgroundColor: 'rgba(255,255,255,0.08)' }" :label="`Ejercicio ${props.index} de ${count}`" />
      </div>
    </div>

    <div class="content-grid q-pa-md">
      <div class="content-left card-fade">
        <q-card flat class="glass-card">
          <q-card-section class="video-section">
            <div class="video-container">
              <iframe
                class="embed-video"
                :src="exercise.video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-h6 text-white q-mb-sm">Descripción</div>
            <p class="text-body1 text-grey-3 line-height-relaxed">{{ exercise.descripcion }}</p>
          </q-card-section>
        </q-card>
      </div>

      <div class="content-right card-fade delay-2">
        <q-card flat bordered class="glass-card rounded-borders section-card">
          <q-card-section>
            <div class="text-h6 q-mb-md flex items-center">
              <q-icon name="list" class="q-mr-sm" :style="{ color: accent }" /> Instrucciones
            </div>
            <q-list separator>
              <q-item v-for="(step, i) in exercise.pasos" :key="i" class="q-px-none">
                <q-item-section avatar>
                  <q-badge rounded :style="{ backgroundColor: accent, color: 'white' }">{{ i + 1 }}</q-badge>
                </q-item-section>
                <q-item-section class="text-body2 text-grey-3">{{ step }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <q-card flat bordered class="glass-card rounded-borders section-card">
          <q-card-section>
            <div class="text-h6 q-mb-md">Cambiar ejercicio</div>
            <div class="row wrap q-gutter-sm">
              <q-btn
                v-for="n in count"
                :key="n"
                unelevated
                rounded
                :label="n"
                :style="props.index === n ? { backgroundColor: accent, color: 'white' } : { backgroundColor: 'rgba(255, 255, 255, 0.12)', color: 'white' }"
                @click="router.push(`/${props.muscle}/ejercicio${n}`)"
              />
            </div>
          </q-card-section>
        </q-card>

        <q-btn
          size="lg"
          unelevated
          :color="buttonColor"
          :icon="buttonIcon"
          :label="buttonLabel"
          class="full-width transition-all complete-btn"
          :class="{ 'scale-btn': isCompleted }"
          @click="toggleCompleted"
        />

        <div class="row items-center justify-between q-mt-md nav-row">
          <q-btn
            flat
            round
            dense
            icon="arrow_back"
            label="Anterior"
            @click="goPrev"
            :disable="!hasPrev"
          />
          <div class="text-caption text-grey-3">Ejercicio {{ props.index }} de {{ count }}</div>
          <q-btn
            flat
            round
            dense
            icon="arrow_forward"
            label="Siguiente"
            @click="goNext"
            :disable="!hasNext"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Notify } from 'quasar'
import ejercicios from '../data/ejercicios.js'

const props = defineProps({
  muscle: { type: String, required: true },
  index: { type: Number, required: true }
})

const meta = {
  brazos:  { accent: '#E8622C' },
  pecho:   { accent: '#4C9A8D' },
  espalda: { accent: '#C9A227' },
  pierna:  { accent: '#6C8EBF' }
}

const router = useRouter()
const isCompleted = ref(false)
const storageKey = computed(() => `gym_app_${props.muscle}_${props.index}`)

const muscleData = computed(() => ejercicios[props.muscle] || { nombre: 'Desconocido', ejercicios: [] })
const exercise = computed(() => muscleData.value.ejercicios[props.index - 1] || {
  nombre: 'Ejercicio no encontrado',
  descripcion: 'No hay información disponible para este ejercicio.',
  video: '',
  pasos: [],
  nivel: '--'
})
const muscleName = computed(() => muscleData.value.nombre)
const count = computed(() => muscleData.value.ejercicios.length)
const accent = computed(() => meta[props.muscle]?.accent || '#E8622C')

const hasPrev = computed(() => props.index > 1)
const hasNext = computed(() => props.index < count.value)
const buttonColor = computed(() => (isCompleted.value ? 'positive' : 'primary'))
const buttonIcon = computed(() => (isCompleted.value ? 'check' : 'fitness_center'))
const buttonLabel = computed(() => (isCompleted.value ? '¡Ejercitado!' : 'Marcar como hecho'))

onMounted(() => {
  isCompleted.value = localStorage.getItem(storageKey.value) === 'true'
})

function toggleCompleted () {
  isCompleted.value = !isCompleted.value
  localStorage.setItem(storageKey.value, isCompleted.value)

  if (isCompleted.value) {
    Notify.create({
      message: '¡Excelente! Has registrado tu progreso.',
      color: 'positive',
      icon: 'emoji_events',
      position: 'bottom-right',
      timeout: 2400
    })
  }
}

function goPrev () {
  if (hasPrev.value) {
    router.push(`/${props.muscle}/ejercicio${props.index - 1}`)
  }
}

function goNext () {
  if (hasNext.value) {
    router.push(`/${props.muscle}/ejercicio${props.index + 1}`)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

.exercise-page {
  min-height: calc(100vh - 112px);
  padding-bottom: 30px;
  background:
    radial-gradient(1200px 600px at 20% -10%, rgba(232,98,44,0.10), transparent 60%),
    linear-gradient(180deg, #04141d 0%, #0b2a3a 55%, #04141d 100%);
  font-family: 'Inter', sans-serif;
  color: white;
}

.exercise-hero {
  padding: 60px 24px 40px;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.hero-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #E8622C;
  margin-bottom: 18px;
}

.hero-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #F2EDE4;
  font-size: clamp(2.2rem, 6vw, 3rem);
  line-height: 1.05;
  margin: 0 0 16px;
}

.hero-sub {
  color: #93A6B3;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.hero-meta {
  justify-content: center;
  margin-top: 24px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.85fr;
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto 60px;
  padding: 0 24px;
  animation: fadeUp 0.6s ease;
}

.content-left,
.content-right {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 18px 45px rgba(0,0,0,0.18);
}

.embed-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
}

.section-card {
  padding: 12px;
}

.rounded-borders {
  border-radius: 20px;
}

/* Botones de cambiar ejercicio mejorados y más visibles */
.section-card .q-btn {
  min-width: 42px;
  min-height: 42px;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform 0.2s ease, background 0.2s ease;
}

.section-card .q-btn:hover {
  transform: scale(1.08);
}

.complete-btn {
  margin-top: 12px;
}

.line-height-relaxed {
  line-height: 1.7;
}

.nav-row {
  font-size: 0.9rem;
}

.card-fade {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 0.7s ease forwards;
}

.card-fade.delay-2 {
  animation-delay: 0.1s;
}

.complete-btn .q-btn__content {
  justify-content: center;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 950px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .content-grid,
  .card-fade {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>