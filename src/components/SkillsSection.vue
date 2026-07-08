<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import AndroidMascot from './AndroidMascot.vue';
import { skills, type Skill } from '../data/portfolio';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

type SkillGroup = Skill['group'];

const skillDetails: Record<
  SkillGroup,
  {
    focus: string;
    summary: string;
    impact: string[];
  }
> = {
  Android: {
    focus: 'Native product delivery',
    summary:
      'Building production Android apps with Kotlin, Java, Android SDK, Compose, and classic XML views while keeping screens responsive and release-ready.',
    impact: [
      'Own features from UI implementation to API integration and release polish.',
      'Modernize older Java/Kotlin codebases without slowing active product work.',
      'Build reusable UI patterns for high-traffic consumer applications.',
    ],
  },
  Architecture: {
    focus: 'Maintainable systems',
    summary:
      'Designing codebases that teams can extend safely through MVVM/MVI, clean boundaries, modular thinking, SOLID principles, and practical design patterns.',
    impact: [
      'Separate UI, domain, and data layers so features remain testable.',
      'Refactor legacy modules into clearer structures with lower regression risk.',
      'Document architecture decisions so onboarding and reviews move faster.',
    ],
  },
  Platform: {
    focus: 'Reliable app foundations',
    summary:
      'Handling the mobile foundations behind reliable products: asynchronous data, dependency injection, networking, persistence, reactive streams, and error states.',
    impact: [
      'Use Coroutines, Flow, RxJava, and Hilt in real production flows.',
      'Integrate REST APIs with resilient loading, empty, and failure states.',
      'Debug performance, data, and lifecycle issues across complex screens.',
    ],
  },
  Realtime: {
    focus: 'Live interactions',
    summary:
      'Creating responsive communication experiences for healthcare and service products where connection quality, state handling, and user trust matter.',
    impact: [
      'Build audio/video consultation flows with WebRTC-oriented product logic.',
      'Handle WebSocket-driven realtime states and unstable network conditions.',
      'Support notifications and live updates without making the app feel fragile.',
    ],
  },
  Workflow: {
    focus: 'Team leadership',
    summary:
      'Leading delivery habits around code review, technical direction, documentation, testing, debugging, and release quality, including Android team lead work since 2024.',
    impact: [
      'Guide Android delivery decisions for product teams and junior engineers.',
      'Improve code quality through reviews, shared standards, and documentation.',
      'Coordinate Jira/Git workflows, release checks, and regression prevention.',
    ],
  },
};

const ui = useUiStore();
const { locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');

const skillGroups = computed(() => {
  const groups = skills.reduce<Record<SkillGroup, Skill[]>>((groups, skill) => {
    groups[skill.group] = groups[skill.group] ?? [];
    groups[skill.group].push(skill);
    return groups;
  }, {} as Record<SkillGroup, Skill[]>);

  return (Object.keys(groups) as SkillGroup[]).map((name) => ({
    name,
    items: groups[name],
    ...(isFa.value ? fa.skills.groups[name] : skillDetails[name]),
  }));
});

const skillSnippet = (group: { name: SkillGroup; focus: string }) => [
  `interface ${group.name}Module {`,
  `  val focus: String = "${group.focus.toLowerCase().replace(/\s+/g, '_')}"`,
  '}',
];
</script>

<template>
  <section id="skills" class="section-shell">
    <div class="section-heading centered reveal">
      <p class="eyebrow">{{ isFa ? fa.skills.eyebrow : 'Skills' }}</p>
      <h2>{{ isFa ? fa.skills.title : 'Practical Android strengths for production teams.' }}</h2>
      <p class="section-copy">
        {{
          isFa
            ? fa.skills.copy
            : 'A recruiter-friendly view of how I work: deep native Android delivery, architecture discipline, reliable platform engineering, realtime product experience, and team leadership.'
        }}
      </p>
    </div>

    <div class="skills-grid">
      <article v-for="group in skillGroups" :key="group.name" class="skill-card reveal">
        <AndroidMascot />
        <div class="skill-card-header">
          <span class="skill-focus">{{ group.focus }}</span>
          <h3>{{ group.name }}</h3>
          <p>{{ group.summary }}</p>
        </div>

        <div class="skill-code-block" :aria-label="`${group.name} code profile`">
          <code v-for="line in skillSnippet(group)" :key="line" class="code-line">{{ line }}</code>
        </div>

        <ul class="skill-proof-list" :aria-label="`${group.name} proof points`">
          <li v-for="point in group.impact" :key="point">{{ point }}</li>
        </ul>

        <div class="skill-chip-list" :aria-label="`${group.name} skills`">
          <span v-for="skill in group.items" :key="skill.name" class="skill-chip">
            {{ skill.name }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
