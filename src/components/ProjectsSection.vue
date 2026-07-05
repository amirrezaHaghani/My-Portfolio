<script setup lang="ts">
import { computed, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Store } from '@lucide/vue';
import AndroidMascot from './AndroidMascot.vue';
import { projects } from '../data/portfolio';
import { useUiStore, type ProjectFilter } from '../stores/ui';

const filters: ProjectFilter[] = ['All', 'Religious', 'Healthcare', 'Education', 'Entertainment'];
const ui = useUiStore();

const filteredProjects = computed(() => {
  if (ui.activeFilter === 'All') {
    return projects;
  }

  return projects.filter((project) => project.category === ui.activeFilter);
});

const setProjectFilter = (filter: ProjectFilter) => {
  ui.setFilter(filter);

  void nextTick(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.fromTo(
      '.project-card',
      { y: 14, scale: 0.98 },
      {
        y: 0,
        scale: 1,
        duration: 0.42,
        ease: 'power2.out',
        stagger: 0.04,
        clearProps: 'transform',
        onComplete: () => ScrollTrigger.refresh(),
      },
    );
  });
};
</script>

<template>
  <section id="projects" class="section-shell">
    <div class="section-heading centered reveal">
      <p class="eyebrow">Projects</p>
      <h2>Shipped Android products with scale, complexity, and real users.</h2>
    </div>

    <div class="filter-bar reveal" role="tablist" aria-label="Project filters">
      <button
        v-for="filter in filters"
        :key="filter"
        type="button"
        :class="{ active: ui.activeFilter === filter }"
        role="tab"
        :aria-selected="ui.activeFilter === filter"
        @click="setProjectFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>

    <TransitionGroup class="projects-grid" name="project-card" tag="div">
      <article v-for="project in filteredProjects" :key="project.title" class="project-card reveal">
        <AndroidMascot />
        <div class="project-shot" :style="{ '--accent': project.accent }">
          <div v-if="project.preview === 'pardeabi-tv' && project.previewImages" class="pardeabi-tv-preview">
            <figure class="tv-device tv-device-primary">
              <div class="tv-screen">
                <img :src="project.previewImages.home" alt="Parde Abi home screen preview" loading="lazy" />
                <span>Home</span>
              </div>
              <i aria-hidden="true"></i>
            </figure>

            <figure class="tv-device tv-device-secondary">
              <div class="tv-screen movie-screen">
                <div class="movie-rail">
                  <img
                    v-for="movie in project.previewImages.movies"
                    :key="movie"
                    :src="movie"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <span>Movies</span>
              </div>
              <i aria-hidden="true"></i>
            </figure>
          </div>
          <img v-else :src="project.imageUrl" :alt="project.imageAlt" loading="lazy" />
          <div class="project-shot-overlay" aria-hidden="true"></div>
        </div>
        <div class="project-body">
          <p>{{ project.category }}</p>
          <h3>{{ project.title }}</h3>
          <span>{{ project.description }}</span>
          <div class="project-stats" :aria-label="`${project.title} product stats`">
            <strong v-for="stat in project.stats" :key="stat">{{ stat }}</strong>
          </div>
          <div class="tech-stack">
            <em v-for="tech in project.technologies" :key="tech">{{ tech }}</em>
          </div>
          <div class="project-links">
            <a :href="project.websiteUrl" target="_blank" rel="noreferrer">
              Website
              <ExternalLink :size="16" aria-hidden="true" />
            </a>
            <a v-if="project.storeUrl" :href="project.storeUrl" target="_blank" rel="noreferrer">
              Store
              <Store :size="16" aria-hidden="true" />
            </a>
            <a
              v-for="store in project.storeLinks"
              :key="store.url"
              :href="store.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ store.label }}
              <Store :size="16" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </TransitionGroup>
  </section>
</template>
