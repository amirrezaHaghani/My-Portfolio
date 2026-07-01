<script setup lang="ts">
import { Quote } from '@lucide/vue';
import { testimonials } from '../data/portfolio';
</script>

<template>
  <section class="section-shell testimonials-section">
    <article v-for="item in testimonials" :key="item.author" class="testimonial-card reveal">
      <Quote :size="22" aria-hidden="true" />
      <p>{{ item.quote }}</p>
      <span>{{ item.author }}</span>
    </article>
  </section>
</template>
