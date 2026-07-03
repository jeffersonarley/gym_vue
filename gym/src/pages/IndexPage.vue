<template>
  <q-page class="home-page">
    <div class="hero">
      <div class="hero-eyebrow">
        Semana {{ weekNumber }} · {{ totalCompleted }}/{{ totalExercises }} ejercicios hechos
      </div>
      <h1 class="hero-title">
        Elige tu<br /><span class="accent">grupo muscular</span>
      </h1>
      <p class="hero-sub">
        Cuatro rutinas, tu progreso se guarda solo. Toca un grupo y entrena.
      </p>
    </div>

    <div class="cards-grid">
      <div
        v-for="(muscle, i) in muscles"
        :key="muscle.key"
        class="muscle-card"
        tabindex="0"
        role="button"
        :style="{ '--delay': i * 0.08 + 's', '--accent': muscle.accent }"
        @click="go(muscle)"
        @keyup.enter="go(muscle)"
      >
        <div class="card-ring">
          <svg viewBox="0 0 120 120" class="ring-svg">
            <circle cx="60" cy="60" r="52" class="ring-track" />
            <circle
              cx="60" cy="60" r="52"
              class="ring-progress"
              :style="{
                strokeDasharray: circumference,
                strokeDashoffset: dashOffset(muscle)
              }"
            />
          </svg>
          <q-icon :name="muscle.icon" size="30px" class="ring-icon" />
        </div>

        <div class="card-body">
          <div class="card-name">{{ muscle.name }}</div>
          <div class="card-progress">
            {{ completedCount(muscle) }}/{{ muscle.total }} ejercicios completados
          </div>
        </div>

        <q-icon name="arrow_forward" class="card-arrow" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ejercicios from '../data/ejercicios.js'

const router = useRouter()

// Ajusta íconos/acentos si tus keys en ejercicios.js son distintas
const meta = {
  brazos:  { icon: 'fitness_center',       accent: '#E8622C' },
  pecho:   { icon: 'sports_gymnastics',    accent: '#4C9A8D' },
  espalda: { icon: 'accessibility_new',    accent: '#C9A227' },
  pierna:  { icon: 'directions_run',       accent: '#6C8EBF' }
}

const muscles = computed(() =>
  Object.keys(ejercicios).map(key => ({
    key,
    name: ejercicios[key].nombre,
    total: ejercicios[key].ejercicios.length,
    icon: meta[key]?.icon || 'fitness_center',
    accent: meta[key]?.accent || '#E8622C'
  }))
)

// Truco para forzar recomputo tras leer localStorage en el mount
const tick = reactive({ v: 0 })

function completedCount (muscle) {
  tick.v // dependencia reactiva
  let c = 0
  for (let i = 1; i <= muscle.total; i++) {
    if (localStorage.getItem(`gym_app_${muscle.key}_${i}`) === 'true') c++
  }
  return c
}

const totalExercises = computed(() => muscles.value.reduce((a, m) => a + m.total, 0))
const totalCompleted = computed(() => {
  tick.v
  return muscles.value.reduce((a, m) => a + completedCount(m), 0)
})

const circumference = 2 * Math.PI * 52
function dashOffset (muscle) {
  const pct = muscle.total ? completedCount(muscle) / muscle.total : 0
  return circumference * (1 - pct)
}

function go (muscle) {
  router.push(`/${muscle.key}/ejercicio1`)
}

const weekNumber = computed(() => {
  const d = new Date()
  const start = new Date(d.getFullYear(), 0, 1)
  return Math.ceil((((d - start) / 86400000) + start.getDay() + 1) / 7)
})

onMounted(() => { tick.v++ })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

.home-page {
  min-height: 100vh;
  background:
    radial-gradient(1200px 600px at 20% -10%, rgba(232,98,44,0.10), transparent 60%),
    linear-gradient(180deg, #04141d 0%, #0b2a3a 55%, #04141d 100%);
  font-family: 'Inter', sans-serif;
  padding-bottom: 60px;
}

.hero {
  padding: 72px 24px 40px;
  max-width: 720px;
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
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: 0.01em;
  margin: 0 0 16px;
}

.hero-title .accent {
  color: #E8622C;
}

.hero-sub {
  color: #93A6B3;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 40px auto 0;
  padding: 0 24px;
}

.muscle-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px;
  border-radius: 18px;
  background: rgba(255,255,255,0.045);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(6px);
  cursor: pointer;
  outline: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  opacity: 0;
  animation: cardIn 0.5s ease forwards;
  animation-delay: var(--delay, 0s);
}

.muscle-card:hover,
.muscle-card:focus-visible {
  transform: translateY(-4px);
  border-color: var(--accent);
  background: rgba(255,255,255,0.07);
}

.muscle-card:focus-visible {
  box-shadow: 0 0 0 2px var(--accent);
}

.card-ring {
  position: relative;
  width: 68px;
  height: 68px;
  flex-shrink: 0;
}

.ring-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.ring-track {
  fill: none;
  stroke: rgba(255,255,255,0.12);
  stroke-width: 8;
}

.ring-progress {
  fill: none;
  stroke: var(--accent);
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.6s ease;
}

.ring-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--accent);
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-name {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: 1.15rem;
  color: #F2EDE4;
}

.card-progress {
  margin-top: 4px;
  font-size: 0.82rem;
  color: #93A6B3;
}

.card-arrow {
  color: #93A6B3;
  transition: transform 0.25s ease, color 0.25s ease;
}

.muscle-card:hover .card-arrow,
.muscle-card:focus-visible .card-arrow {
  transform: translateX(4px);
  color: var(--accent);
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .muscle-card {
    animation: none;
    opacity: 1;
  }
  .muscle-card, .card-arrow, .ring-progress {
    transition: none;
  }
}
</style>
