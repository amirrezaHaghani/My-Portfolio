<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutSection from './components/AboutSection.vue';
import AnimatedBackground from './components/AnimatedBackground.vue';
import ContactSection from './components/ContactSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ResumeSection from './components/ResumeSection.vue';
import SiteNav from './components/SiteNav.vue';
import SkillsSection from './components/SkillsSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';

gsap.registerPlugin(ScrollTrigger);

const cleanupCallbacks: Array<() => void> = [];

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
      { y: 42, opacity: 0, filter: 'blur(12px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 86%',
          toggleActions: 'restart none restart none',
          invalidateOnRefresh: true,
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

  ScrollTrigger.create({
    trigger: document.documentElement,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      const percent = Math.round(self.progress * 100);

      if (hudXp) {
        hudXp.textContent = `${percent}%`;
      }

      if (hudProgress) {
        gsap.to(hudProgress, {
          scaleX: Math.max(self.progress, 0.04),
          duration: 0.28,
          ease: 'power2.out',
        });
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

  gsap.utils.toArray<HTMLElement>('.section-shell').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 58%',
      once: false,
      onEnter: () => {
        const label = section.id ? `${section.id.toUpperCase()} XP` : 'XP';
        showAchievement(label);
      },
      onEnterBack: () => {
        const label = section.id ? `${section.id.toUpperCase()} XP` : 'XP';
        showAchievement(label);
      },
    });
  });

  const cursorGlow = document.querySelector<HTMLElement>('.cursor-glow');
  const moveCursorGlow = (event: PointerEvent) => {
    if (!cursorGlow || event.pointerType === 'touch') {
      return;
    }

    gsap.to(cursorGlow, {
      x: event.clientX,
      y: event.clientY,
      opacity: 1,
      duration: 0.35,
      ease: 'power3.out',
    });
  };

  window.addEventListener('pointermove', moveCursorGlow);
  cleanupCallbacks.push(() => window.removeEventListener('pointermove', moveCursorGlow));

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

  const interactiveCardSelector =
    '.project-card, .skill-card, .timeline-card, .resume-preview, .testimonial-card, .metric-strip div';

  const tiltInteractiveCard = (event: PointerEvent) => {
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

  const resetInteractiveCard = (event: PointerEvent) => {
    const target = event.target as HTMLElement | null;
    const card = target?.closest<HTMLElement>(interactiveCardSelector);
    const nextTarget = event.relatedTarget instanceof Node ? event.relatedTarget : null;

    if (!card || (nextTarget && card.contains(nextTarget))) {
      return;
    }

    gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: 'power3.out' });
  };

  document.addEventListener('pointermove', tiltInteractiveCard);
  document.addEventListener('pointerout', resetInteractiveCard);
  cleanupCallbacks.push(() => {
    document.removeEventListener('pointermove', tiltInteractiveCard);
    document.removeEventListener('pointerout', resetInteractiveCard);
  });

  const runSectionTransition = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');

    if (!link) {
      return;
    }

    gsap.fromTo(
      '.section-transition-line',
      { scaleX: 0, transformOrigin: 'left center', opacity: 1 },
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

  const burstTargets =
    'a, button, .project-card, .skill-chip, .timeline-card, .resume-preview, .testimonial-card, .metric-strip div';
  const createBurst = (event: PointerEvent) => {
    const target = event.target as HTMLElement | null;

    if (!target?.closest(burstTargets) || event.pointerType === 'touch') {
      return;
    }

    for (let i = 0; i < 10; i += 1) {
      const particle = document.createElement('span');
      particle.className = 'click-burst';
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;
      document.body.appendChild(particle);

      const angle = (Math.PI * 2 * i) / 10;
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

  gsap.to('.hud-rank', {
    textShadow: '0 0 22px rgba(77, 255, 191, 0.9)',
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  gsap.to('.energy-lane', {
    backgroundPositionX: '240px',
    duration: 2.8,
    repeat: -1,
    ease: 'none',
    stagger: 0.16,
  });
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
    <ResumeSection />
    <TestimonialsSection />
    <ContactSection />
  </main>
  <footer class="site-footer">
    <span>Amirreza Haghani</span>
    <a href="#home">Back to top</a>
  </footer>
</template>
