<template>
  <div class="animated-bg" aria-hidden="true">
    <span class="mesh mesh-a"></span>
    <span class="mesh mesh-b"></span>
    <span class="mesh mesh-c"></span>
    <span v-for="i in 2" :key="`lane-${i}`" class="energy-lane" :style="{ '--i': i }"></span>
    <span v-for="i in 6" :key="`particle-${i}`" class="particle" :style="{ '--i': i }"></span>
  </div>
</template>
