<script setup lang="ts">
const mascotStyles = ['hello', 'wink', 'nod', 'spark', 'peek'] as const;
const mascotStyle = mascotStyles[Math.floor(Math.random() * mascotStyles.length)];
</script>

<template>
  <span class="android-mascot" :class="`android-mascot--${mascotStyle}`" aria-hidden="true">
    <span class="android-antenna android-antenna-left"></span>
    <span class="android-antenna android-antenna-right"></span>
    <span class="android-head">
      <span class="android-eye"></span>
      <span class="android-eye"></span>
      <span class="android-mouth"></span>
    </span>
    <span class="android-body">
      <span class="android-arm android-arm-left"></span>
      <span class="android-arm android-arm-right"></span>
      <span class="android-leg android-leg-left"></span>
      <span class="android-leg android-leg-right"></span>
    </span>
    <span class="android-spark android-spark-one"></span>
    <span class="android-spark android-spark-two"></span>
  </span>
</template>
