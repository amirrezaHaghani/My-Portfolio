import { defineStore } from 'pinia';

export type ProjectFilter = 'All' | 'Religious' | 'Healthcare' | 'Education' | 'Entertainment';
export type Locale = 'en' | 'fa';

export const useUiStore = defineStore('ui', {
  state: () => ({
    activeFilter: 'All' as ProjectFilter,
    isMenuOpen: false,
    locale: 'en' as Locale,
  }),
  actions: {
    setFilter(filter: ProjectFilter) {
      this.activeFilter = filter;
    },
    setLocale(locale: Locale) {
      this.locale = locale;
    },
    toggleLocale() {
      this.locale = this.locale === 'en' ? 'fa' : 'en';
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
});
