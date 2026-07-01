<script setup lang="ts">
import { MapPin, Sparkles } from '@lucide/vue';
import { profile } from '../data/portfolio';
</script>

<template>
  <section id="about" class="section-shell two-column">
    <div class="section-heading reveal">
      <p class="eyebrow">About me</p>
      <h2>Engineering polished mobile products with durable foundations.</h2>
    </div>

    <div class="glass-panel reveal">
      <div class="about-kicker">
        <Sparkles :size="18" aria-hidden="true" />
        <span>Software engineer based in {{ profile.location }}</span>
      </div>
      <p>
        I am an Android software engineer with 8+ years of experience, starting as a freelancer
        before moving into product teams and large-scale native Android systems. My work blends
        Kotlin depth, clean architecture, production debugging, and a steady habit of documenting
        decisions so teams can move faster.
      </p>
      <p>
        Across large-scale Android products, I have maintained core features, refactored aging
        codebases, supported new engineers, and helped protect release quality through architecture,
        testing, and practical collaboration.
      </p>
      <div class="location-pill">
        <MapPin :size="17" aria-hidden="true" />
        {{ profile.location }}
      </div>
    </div>
  </section>
</template>
