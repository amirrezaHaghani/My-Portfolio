<script setup lang="ts">
import { ArrowRight, Download, Mail } from '@lucide/vue';
import { metrics, profile } from '../data/portfolio';
</script>

<template>
  <section id="home" class="hero-section section-shell">
    <div class="hero-copy reveal">
      <p class="eyebrow">Native mobile engineer / Kotlin specialist</p>
      <h1>{{ profile.name }}</h1>
      <p class="hero-role">{{ profile.role }}</p>
      <p class="hero-tagline">{{ profile.tagline }}</p>

      <div class="hero-actions">
        <a class="primary-button" href="#projects">
          View work
          <ArrowRight :size="18" aria-hidden="true" />
        </a>
        <a class="secondary-button" :href="`mailto:${profile.email}`">
          <Mail :size="18" aria-hidden="true" />
          Contact
        </a>
        <a class="ghost-button" href="/resume.pdf" download>
          <Download :size="18" aria-hidden="true" />
          Resume
        </a>
      </div>

      <dl class="metric-strip">
        <div v-for="metric in metrics" :key="metric.label">
          <dt>{{ metric.value }}</dt>
          <dd>{{ metric.label }}</dd>
        </div>
      </dl>
    </div>

    <div class="hero-visual reveal">
      <div class="portrait-ring">
        <img :src="profile.portraitUrl" alt="Portrait of Amirreza Haghani" />
      </div>
      <div class="signal-card">
        <span>Current focus</span>
        <strong>Kotlin, Compose, architecture, realtime systems</strong>
      </div>
    </div>
  </section>
</template>
