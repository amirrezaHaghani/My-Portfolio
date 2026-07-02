<script setup lang="ts">
import { MapPin, Sparkles } from '@lucide/vue';
import { profile } from '../data/portfolio';
</script>

<template>
  <section id="about" class="section-shell two-column">
    <div class="section-heading reveal">
      <p class="eyebrow">About me</p>
      <h2>Building Android products that stay reliable after launch.</h2>
    </div>

    <div class="glass-panel reveal">
      <div class="about-kicker">
        <Sparkles :size="18" aria-hidden="true" />
        <span>Software engineer based in {{ profile.location }}</span>
      </div>
      <p>
        I am an Android software engineer with 8+ years of experience, starting as a freelancer
        before moving into startup and product-team environments. My work blends Kotlin depth,
        clean architecture, production debugging, and the patience to leave systems easier to
        understand than I found them.
      </p>
      <p>
        I am most useful where product expectations are high and the codebase has to keep moving:
        maintaining core features, refactoring aging modules, supporting teammates, and protecting
        release quality through clear architecture and practical collaboration.
      </p>
      <div class="location-pill">
        <MapPin :size="17" aria-hidden="true" />
        {{ profile.location }}
      </div>
    </div>
  </section>
</template>
