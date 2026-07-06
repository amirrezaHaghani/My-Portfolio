<script setup lang="ts">
import { computed, onMounted, onUnmounted, watchEffect } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutSection from './components/AboutSection.vue';
import AnimatedBackground from './components/AnimatedBackground.vue';
import ContactSection from './components/ContactSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SiteNav from './components/SiteNav.vue';
import SkillsSection from './components/SkillsSection.vue';
import { useUiStore } from './stores/ui';
import { fa } from './data/i18n';

gsap.registerPlugin(ScrollTrigger);

const cleanupCallbacks: Array<() => void> = [];
const ui = useUiStore();
const isFa = computed(() => ui.locale === 'fa');

watchEffect(() => {
  document.documentElement.lang = isFa.value ? 'fa' : 'en';
  document.documentElement.dir = isFa.value ? 'rtl' : 'ltr';
});

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    return;
  }

  gsap.fromTo(
    '.site-nav',
    { y: -24, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
  );

  gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
    gsap.fromTo(
      element,
      { y: 18 },
      {
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      },
    );
  });

  gsap.to('.portrait-ring img', {
    y: -12,
    duration: 3.4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  gsap.to('.scroll-progress', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
    },
  });

  const hudProgress = document.querySelector<HTMLElement>('.hud-track i');
  const hudXp = document.querySelector<HTMLElement>('.hud-xp');
  let lastHudPercent = -1;

  ScrollTrigger.create({
    trigger: document.documentElement,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      const percent = Math.round(self.progress * 100);

      if (hudXp) {
        if (percent !== lastHudPercent) {
          hudXp.textContent = `${percent}%`;
          lastHudPercent = percent;
        }
      }

      if (hudProgress) {
        hudProgress.style.transform = `scaleX(${Math.max(self.progress, 0.04)})`;
      }
    },
  });

  const toast = document.querySelector<HTMLElement>('.achievement-toast');
  const showAchievement = (label: string) => {
    if (!toast) {
      return;
    }

    toast.textContent = `+ ${label}`;
    gsap.fromTo(
      toast,
      { y: 18, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.36,
        ease: 'back.out(1.8)',
        onComplete: () => {
          gsap.to(toast, { y: -14, opacity: 0, delay: 0.85, duration: 0.38, ease: 'power2.in' });
        },
      },
    );
  };

  const cursorGlow = document.querySelector<HTMLElement>('.cursor-glow');
  const moveCursorX = cursorGlow ? gsap.quickTo(cursorGlow, 'x', { duration: 0.18, ease: 'power2.out' }) : null;
  const moveCursorY = cursorGlow ? gsap.quickTo(cursorGlow, 'y', { duration: 0.18, ease: 'power2.out' }) : null;
  const fadeCursor = cursorGlow ? gsap.quickTo(cursorGlow, 'opacity', { duration: 0.18, ease: 'power2.out' }) : null;
  let cursorFrame = 0;
  const moveCursorGlow = (event: PointerEvent) => {
    if (!cursorGlow || event.pointerType === 'touch') {
      return;
    }

    window.cancelAnimationFrame(cursorFrame);
    cursorFrame = window.requestAnimationFrame(() => {
      moveCursorX?.(event.clientX);
      moveCursorY?.(event.clientY);
      fadeCursor?.(1);
    });
  };

  window.addEventListener('pointermove', moveCursorGlow, { passive: true });
  cleanupCallbacks.push(() => {
    window.cancelAnimationFrame(cursorFrame);
    window.removeEventListener('pointermove', moveCursorGlow);
  });

  gsap.utils.toArray<HTMLElement>('.primary-button, .secondary-button, .ghost-button, .nav-cta').forEach((button) => {
    const moveButton = (event: PointerEvent) => {
      const bounds = button.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;

      button.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
      button.style.setProperty('--my', `${event.clientY - bounds.top}px`);

      gsap.to(button, {
        x: x * 0.18,
        y: y * 0.22,
        duration: 0.35,
        ease: 'power3.out',
      });
    };

    const resetButton = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.45)' });
    };

    button.addEventListener('pointermove', moveButton);
    button.addEventListener('pointerleave', resetButton);
    cleanupCallbacks.push(() => {
      button.removeEventListener('pointermove', moveButton);
      button.removeEventListener('pointerleave', resetButton);
    });
  });

  const interactiveCardSelector = '.project-card, .skill-card, .timeline-card, .metric-strip div';
  let tiltFrame = 0;
  let latestTiltEvent: PointerEvent | null = null;

  const applyInteractiveCardTilt = () => {
    const event = latestTiltEvent;
    tiltFrame = 0;

    if (!event) {
      return;
    }

    if (event.pointerType === 'touch') {
      return;
    }

    const target = event.target as HTMLElement | null;
    const card = target?.closest<HTMLElement>(interactiveCardSelector);

    if (!card) {
      return;
    }

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    card.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--my', `${event.clientY - bounds.top}px`);

    gsap.to(card, {
      rotateX: y * -5,
      rotateY: x * 7,
      y: -4,
      duration: 0.35,
      ease: 'power3.out',
      transformPerspective: 900,
      transformOrigin: 'center',
    });
  };

  const tiltInteractiveCard = (event: PointerEvent) => {
    if (window.innerWidth < 900) {
      return;
    }

    latestTiltEvent = event;

    if (!tiltFrame) {
      tiltFrame = window.requestAnimationFrame(applyInteractiveCardTilt);
    }
  };

  const resetInteractiveCard = (event: PointerEvent) => {
    const target = event.target as HTMLElement | null;
    const card = target?.closest<HTMLElement>(interactiveCardSelector);
    const nextTarget = event.relatedTarget instanceof Node ? event.relatedTarget : null;

    if (!card || (nextTarget && card.contains(nextTarget))) {
      return;
    }

    gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: 'power3.out' });
  };

  document.addEventListener('pointermove', tiltInteractiveCard, { passive: true });
  document.addEventListener('pointerout', resetInteractiveCard, { passive: true });
  cleanupCallbacks.push(() => {
    window.cancelAnimationFrame(tiltFrame);
    document.removeEventListener('pointermove', tiltInteractiveCard);
    document.removeEventListener('pointerout', resetInteractiveCard);
  });

  const runSectionTransition = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');

    if (!link) {
      return;
    }

    const transitionOrigin = document.documentElement.dir === 'rtl' ? 'right center' : 'left center';

    gsap.fromTo(
      '.section-transition-line',
      { scaleX: 0, transformOrigin: transitionOrigin, opacity: 1 },
      {
        scaleX: 1,
        duration: 0.38,
        ease: 'power3.inOut',
        yoyo: true,
        repeat: 1,
      },
    );

    showAchievement('NAV XP');
  };

  document.addEventListener('click', runSectionTransition);
  cleanupCallbacks.push(() => document.removeEventListener('click', runSectionTransition));

  const burstTargets = 'a, button, .project-card, .skill-chip, .timeline-card, .metric-strip div';
  const createBurst = (event: PointerEvent) => {
    const target = event.target as HTMLElement | null;

    if (!target?.closest(burstTargets) || event.pointerType === 'touch') {
      return;
    }

    for (let i = 0; i < 6; i += 1) {
      const particle = document.createElement('span');
      particle.className = 'click-burst';
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;
      document.body.appendChild(particle);

      const angle = (Math.PI * 2 * i) / 6;
      const distance = 34 + Math.random() * 42;

      gsap.to(particle, {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        scale: 0,
        opacity: 0,
        duration: 0.64,
        ease: 'power3.out',
        onComplete: () => particle.remove(),
      });
    }
  };

  document.addEventListener('pointerdown', createBurst);
  cleanupCallbacks.push(() => document.removeEventListener('pointerdown', createBurst));
});

onUnmounted(() => {
  cleanupCallbacks.splice(0).forEach((cleanup) => cleanup());
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <div class="scroll-progress" aria-hidden="true"></div>
  <div class="section-transition-line" aria-hidden="true"></div>
  <div class="cursor-glow" aria-hidden="true"></div>
  <div class="gamification-hud" aria-hidden="true">
    <span class="hud-rank">LV 8</span>
    <span class="hud-track"><i></i></span>
    <span class="hud-xp">0%</span>
  </div>
  <div class="achievement-toast" aria-hidden="true">+ XP</div>
  <AnimatedBackground />
  <SiteNav />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <footer class="site-footer">
    <span>Amirreza Haghani</span>
    <a href="#home">{{ isFa ? fa.footer.top : 'Back to top' }}</a>
  </footer>
</template>
