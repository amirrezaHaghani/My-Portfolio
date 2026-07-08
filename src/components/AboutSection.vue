<script setup lang="ts">
import { MapPin, Sparkles } from '@lucide/vue';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { profile } from '../data/portfolio';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const { locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');
const aboutCodeLines = computed(() =>
  isFa.value
    ? [
        'val experienceYears = 8',
        'val path = listOf("Freelance", "Startup", "Product Teams")',
        'val mindset = "keep_it_readable"',
      ]
    : [
        'val experienceYears = 8',
        'val path = listOf("Freelance", "Startup", "Product Teams")',
        'val mindset = "keep_it_readable"',
      ],
);
</script>

<template>
  <section id="about" class="section-shell two-column">
    <div class="section-heading reveal">
      <p class="eyebrow">{{ isFa ? fa.about.eyebrow : 'About me' }}</p>
      <h2>{{ isFa ? fa.about.title : 'Building Android products that stay reliable after launch.' }}</h2>
    </div>

    <div class="glass-panel reveal">
      <div class="about-kicker">
        <Sparkles :size="18" aria-hidden="true" />
        <span>{{ isFa ? fa.about.kicker : `Software engineer based in ${profile.location}` }}</span>
      </div>
      <template v-if="isFa">
        <p v-for="paragraph in fa.about.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </template>
      <template v-else>
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
      </template>
      <div class="inline-code-panel" aria-label="Engineer summary">
        <div class="code-panel-header">
          <span class="code-dots" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <strong>about_me.kt</strong>
        </div>
        <code v-for="line in aboutCodeLines" :key="line" class="code-line">{{ line }}</code>
      </div>
      <div class="location-pill">
        <MapPin :size="17" aria-hidden="true" />
        {{ isFa ? fa.about.location : profile.location }}
      </div>
    </div>
  </section>
</template>
