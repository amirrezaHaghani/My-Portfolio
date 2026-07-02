<script setup lang="ts">
import bugdroidUrl from '../assets/bugdroid-2023.webp';

const mascotStyles = ['hello', 'wink', 'nod', 'spark', 'peek'] as const;
const mascotStyle = mascotStyles[Math.floor(Math.random() * mascotStyles.length)];
</script>

<template>
  <span class="android-mascot" :class="`android-mascot--${mascotStyle}`" aria-hidden="true">
    <img class="android-avatar" :src="bugdroidUrl" alt="" loading="lazy" decoding="async" />
    <span class="android-wink-lid"></span>
    <span class="android-spark android-spark-one"></span>
    <span class="android-spark android-spark-two"></span>
  </span>
</template>
