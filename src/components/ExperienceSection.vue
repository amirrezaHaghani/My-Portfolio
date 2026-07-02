<script setup lang="ts">
import { experiences } from '../data/portfolio';
</script>

<template>
  <section id="experience" class="section-shell">
    <div class="section-heading reveal">
      <p class="eyebrow">Experience</p>
      <h2>From freelance delivery to senior ownership of production Android apps.</h2>
    </div>

    <div class="timeline">
      <article v-for="item in experiences" :key="item.company" class="timeline-item reveal">
        <div class="timeline-dot" aria-hidden="true"></div>
        <div class="timeline-card">
          <span>{{ item.period }}</span>
          <h3>{{ item.role }}</h3>
          <p class="company">{{ item.company }}</p>
          <p>{{ item.summary }}</p>
          <ul>
            <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
