<script setup lang="ts">
import { Download, Eye } from '@lucide/vue';
import { profile } from '../data/portfolio';
</script>

<template>
  <section id="resume" class="section-shell resume-layout">
    <div class="section-heading reveal">
      <p class="eyebrow">Resume</p>
      <h2>A focused CV for Android engineering roles and client work.</h2>
      <p>
        The PDF is available for recruiters and hiring managers. The website highlights the same
        profile with richer context, motion, and project storytelling.
      </p>
      <div class="hero-actions">
        <a class="primary-button" href="/resume.pdf" download>
          <Download :size="18" aria-hidden="true" />
          Download CV
        </a>
        <a class="secondary-button" href="/resume.pdf" target="_blank" rel="noreferrer">
          <Eye :size="18" aria-hidden="true" />
          Preview PDF
        </a>
      </div>
    </div>

    <aside class="resume-preview reveal" aria-label="Resume preview">
      <div class="resume-paper">
        <span>{{ profile.name }}</span>
        <strong>{{ profile.role }}</strong>
        <p>Kotlin / Java / MVVM / MVI / Jetpack Compose / Hilt / Coroutines</p>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </aside>
  </section>
</template>
