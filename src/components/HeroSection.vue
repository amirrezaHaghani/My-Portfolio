<script setup lang="ts">
import { ArrowRight, Download, Mail } from '@lucide/vue';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { metrics, profile } from '../data/portfolio';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const { locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');
const displayedMetrics = computed(() => (isFa.value ? fa.metrics : metrics));
</script>

<template>
  <section id="home" class="hero-section section-shell">
    <div class="hero-copy reveal">
      <p class="eyebrow">{{ isFa ? fa.hero.eyebrow : 'Senior Android engineer / Kotlin specialist' }}</p>
      <h1>{{ isFa ? fa.hero.name : profile.name }}</h1>
      <p class="hero-role">{{ isFa ? fa.hero.role : profile.role }}</p>
      <p class="hero-tagline">{{ isFa ? fa.hero.tagline : profile.tagline }}</p>

      <ul class="hero-specialties" aria-label="Core Android strengths">
        <li>Kotlin</li>
        <li>Compose</li>
        <li>Architecture</li>
        <li>Release quality</li>
      </ul>

      <div class="hero-actions">
        <a class="primary-button" href="#projects">
          {{ isFa ? fa.hero.work : 'View work' }}
          <ArrowRight :size="18" aria-hidden="true" />
        </a>
        <a class="secondary-button" :href="`mailto:${profile.email}`">
          <Mail :size="18" aria-hidden="true" />
          {{ isFa ? fa.hero.contact : 'Contact' }}
        </a>
        <a class="ghost-button" href="/resume.pdf" download>
          <Download :size="18" aria-hidden="true" />
          {{ isFa ? fa.hero.resume : 'Resume' }}
        </a>
      </div>

      <dl class="metric-strip">
        <div v-for="metric in displayedMetrics" :key="metric.label">
          <dt>{{ metric.value }}</dt>
          <dd>{{ metric.label }}</dd>
        </div>
      </dl>
    </div>

    <div class="hero-visual reveal">
      <div class="portrait-ring">
        <img
          :src="profile.portraitUrl"
          :alt="isFa ? fa.hero.portraitAlt : 'Portrait of Amirreza Haghani'"
          width="960"
          height="960"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <div class="signal-card">
        <span>{{ isFa ? fa.hero.focusLabel : 'Current focus' }}</span>
        <strong>{{ isFa ? fa.hero.focus : 'Kotlin, Compose, scalable architecture, production reliability' }}</strong>
      </div>
    </div>
  </section>
</template>
