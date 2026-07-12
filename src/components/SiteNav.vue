<script setup lang="ts">
import { Download, Menu, X } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import LogoMark from './LogoMark.vue';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

const links = ['about', 'skills', 'experience', 'projects', 'contact'];
const ui = useUiStore();
const { isMenuOpen, locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');
const linkLabel = (link: string) => (isFa.value ? fa.nav.links[link as keyof typeof fa.nav.links] : link);
</script>

<template>
  <header class="site-nav">
    <a href="#home" class="brand" aria-label="Amirreza Haghani home" @click="ui.closeMenu">
      <LogoMark />
    </a>

    <nav class="desktop-links" aria-label="Primary navigation">
      <a v-for="link in links" :key="link" :href="`#${link}`">{{ linkLabel(link) }}</a>
    </nav>

    <button class="language-toggle" type="button" :aria-label="isFa ? fa.nav.toggleLabel : 'تغییر زبان به فارسی'" @click="ui.toggleLocale">
      {{ isFa ? fa.nav.toggle : 'FA' }}
    </button>

    <a class="nav-cta" href="/resume.pdf" download>
      <Download :size="17" aria-hidden="true" />
      <span>{{ isFa ? fa.nav.download : 'Download CV' }}</span>
    </a>

    <button class="icon-button mobile-menu-button" type="button" :aria-expanded="isMenuOpen" @click="ui.toggleMenu">
      <Menu v-if="!isMenuOpen" :size="21" aria-hidden="true" />
      <X v-else :size="21" aria-hidden="true" />
      <span class="sr-only">Toggle navigation</span>
    </button>
  </header>

  <nav v-if="isMenuOpen" class="mobile-panel" aria-label="Mobile navigation">
    <a v-for="link in links" :key="link" :href="`#${link}`" @click="ui.closeMenu">{{ linkLabel(link) }}</a>
    <button type="button" @click="ui.toggleLocale">{{ isFa ? fa.nav.toggle : 'FA' }} / {{ isFa ? fa.nav.mobileToggle : 'Switch language' }}</button>
    <a href="/resume.pdf" download @click="ui.closeMenu">{{ isFa ? fa.nav.download : 'Download CV' }}</a>
  </nav>
</template>
