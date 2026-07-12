<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { experiences } from '../data/portfolio';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const { locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');
const localizedExperiences = computed(() =>
  experiences.map((item) => {
    const translation = fa.experience.items[item.company as keyof typeof fa.experience.items];

    if (!isFa.value || !translation) {
      return item;
    }

    return {
      ...item,
      ...translation,
    };
  }),
);
</script>

<template>
  <section id="experience" class="section-shell">
    <div class="section-heading centered reveal">
      <p class="eyebrow">{{ isFa ? fa.experience.eyebrow : 'Experience' }}</p>
      <h2>
        {{
          isFa
            ? fa.experience.title
            : 'From freelance delivery to senior ownership of production Android products.'
        }}
      </h2>
    </div>

    <div class="timeline">
      <article v-for="item in localizedExperiences" :key="item.company" class="timeline-item reveal">
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
