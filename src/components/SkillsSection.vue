<script setup lang="ts">
import { computed } from 'vue';
import { skills } from '../data/portfolio';

const skillSummaries: Record<string, string> = {
  Android: 'Native Android product development across modern Kotlin and Java stacks.',
  Architecture: 'Clean boundaries, readable modules, and architecture choices teams can maintain.',
  Platform: 'Asynchronous data, dependency injection, networking, and reactive product flows.',
  Realtime: 'Realtime communication and media features built for responsive mobile experiences.',
  Workflow: 'Release-minded engineering habits: debugging, documentation, testing, and collaboration.',
};

const groupedSkills = computed(() => {
  return skills.reduce<Record<string, typeof skills>>((groups, skill) => {
    groups[skill.group] = groups[skill.group] ?? [];
    groups[skill.group].push(skill);
    return groups;
  }, {});
});
</script>

<template>
  <section id="skills" class="section-shell">
    <div class="section-heading centered reveal">
      <p class="eyebrow">Skills</p>
      <h2>Practical Android strengths for production teams.</h2>
    </div>

    <div class="skills-grid">
      <article v-for="(items, group) in groupedSkills" :key="group" class="skill-card reveal">
        <div class="skill-card-header">
          <h3>{{ group }}</h3>
          <p>{{ skillSummaries[group] }}</p>
        </div>
        <div class="skill-chip-list" :aria-label="`${group} skills`">
          <span v-for="skill in items" :key="skill.name" class="skill-chip">
            {{ skill.name }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
