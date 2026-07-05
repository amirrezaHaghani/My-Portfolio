import { defineStore } from 'pinia';

export type ProjectFilter = 'All' | 'Religious' | 'Healthcare' | 'Education' | 'Entertainment';

export const useUiStore = defineStore('ui', {
  state: () => ({
    activeFilter: 'All' as ProjectFilter,
    isMenuOpen: false,
  }),
  actions: {
    setFilter(filter: ProjectFilter) {
      this.activeFilter = filter;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
});
