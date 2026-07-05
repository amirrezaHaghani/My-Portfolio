<script setup lang="ts">
import { Code2, Mail, Phone, Send } from '@lucide/vue';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { profile } from '../data/portfolio';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

const status = ref('');
const ui = useUiStore();
const { locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');

function handleSubmit() {
  status.value = isFa.value ? fa.contact.status : 'Thanks. Your message draft is ready in your email client.';
  const subject = encodeURIComponent(isFa.value ? fa.contact.subject : 'Portfolio inquiry');
  const body = encodeURIComponent(isFa.value ? fa.contact.body : 'Hi Amirreza,\n\nI would like to talk about...');
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}
</script>

<template>
  <section id="contact" class="section-shell contact-layout">
    <div class="section-heading reveal">
      <p class="eyebrow">{{ isFa ? fa.contact.eyebrow : 'Contact' }}</p>
      <h2>
        {{
          isFa
            ? fa.contact.title
            : "Let's talk about Android products, architecture, and ambitious teams."
        }}
      </h2>
      <div class="contact-methods">
        <a :href="`mailto:${profile.email}`">
          <Mail :size="18" aria-hidden="true" />
          {{ profile.email }}
        </a>
        <a :href="`tel:${profile.phone}`">
          <Phone :size="18" aria-hidden="true" />
          {{ profile.phone }}
        </a>
      </div>
      <div class="social-row">
        <a href="https://github.com/amirrezaHaghani" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Code2 :size="20" aria-hidden="true" />
        </a>
      </div>
    </div>

    <form class="contact-form reveal" @submit.prevent="handleSubmit">
      <label>
        {{ isFa ? fa.contact.labels.name : 'Name' }}
        <input type="text" name="name" autocomplete="name" required />
      </label>
      <label>
        {{ isFa ? fa.contact.labels.email : 'Email' }}
        <input type="email" name="email" autocomplete="email" required />
      </label>
      <label>
        {{ isFa ? fa.contact.labels.message : 'Message' }}
        <textarea name="message" rows="5" required></textarea>
      </label>
      <button class="primary-button" type="submit">
        {{ isFa ? fa.contact.labels.send : 'Send inquiry' }}
        <Send :size="18" aria-hidden="true" />
      </button>
      <p v-if="status" class="form-status" role="status">{{ status }}</p>
    </form>
  </section>
</template>
