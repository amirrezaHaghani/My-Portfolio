<script setup lang="ts">
import { Download, ExternalLink, FileText } from '@lucide/vue';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const { locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');
</script>

<template>
  <section id="resume" class="section-shell resume-section">
    <div class="section-heading reveal">
      <p class="eyebrow">{{ isFa ? fa.resume.eyebrow : 'Resume' }}</p>
      <h2>{{ isFa ? fa.resume.title : 'Read the full CV without leaving the portfolio.' }}</h2>
      <p class="section-copy">
        {{
          isFa
            ? fa.resume.copy
            : 'Recruiters and clients can preview the exact PDF, download a copy, or open it in a dedicated browser tab.'
        }}
      </p>
      <div class="resume-actions">
        <a class="primary-button" href="/resume.pdf" download>
          <Download :size="18" aria-hidden="true" />
          {{ isFa ? fa.resume.download : 'Download CV' }}
        </a>
        <a class="secondary-button" href="/resume.pdf" target="_blank" rel="noreferrer">
          <ExternalLink :size="18" aria-hidden="true" />
          {{ isFa ? fa.resume.open : 'Open PDF' }}
        </a>
      </div>
    </div>

    <div class="resume-viewer reveal">
      <div class="resume-viewer-top">
        <span>
          <FileText :size="18" aria-hidden="true" />
          {{ isFa ? fa.resume.fileLabel : 'Amirreza Haghani CV' }}
        </span>
        <small>PDF</small>
      </div>
      <iframe
        src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
        :title="isFa ? fa.resume.iframeTitle : 'Amirreza Haghani resume PDF preview'"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>
