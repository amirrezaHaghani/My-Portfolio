<script setup lang="ts">
import { Download, Menu, X } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/ui';

const links = ['about', 'skills', 'experience', 'projects', 'contact'];
const ui = useUiStore();
const { isMenuOpen } = storeToRefs(ui);
</script>

<template>
  <header class="site-nav">
    <a href="#home" class="brand" aria-label="Amirreza Haghani home" @click="ui.closeMenu">
      <span>AH</span>
    </a>

    <nav class="desktop-links" aria-label="Primary navigation">
      <a v-for="link in links" :key="link" :href="`#${link}`">{{ link }}</a>
    </nav>

    <a class="nav-cta" href="/resume.pdf" download>
      <Download :size="17" aria-hidden="true" />
      <span>Download CV</span>
    </a>

    <button class="icon-button mobile-menu-button" type="button" :aria-expanded="isMenuOpen" @click="ui.toggleMenu">
      <Menu v-if="!isMenuOpen" :size="21" aria-hidden="true" />
      <X v-else :size="21" aria-hidden="true" />
      <span class="sr-only">Toggle navigation</span>
    </button>
  </header>

  <nav v-if="isMenuOpen" class="mobile-panel" aria-label="Mobile navigation">
    <a v-for="link in links" :key="link" :href="`#${link}`" @click="ui.closeMenu">{{ link }}</a>
    <a href="/resume.pdf" download @click="ui.closeMenu">Download CV</a>
  </nav>
</template>
