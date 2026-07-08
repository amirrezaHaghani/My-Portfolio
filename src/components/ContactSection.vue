<script setup lang="ts">
import { CalendarCheck, Check, Clipboard, Code2, Mail, MessageSquare, Phone, Rocket, Send } from '@lucide/vue';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { profile } from '../data/portfolio';
import { fa } from '../data/i18n';
import { useUiStore } from '../stores/ui';

const status = ref('');
const copied = ref<'email' | 'phone' | ''>('');
const ui = useUiStore();
const { locale } = storeToRefs(ui);
const isFa = computed(() => locale.value === 'fa');
const contactLabels = computed(() =>
  isFa.value
    ? fa.contact
    : {
        availability: 'If your Android product needs cleaner architecture, steadier delivery, or technical leadership, I am happy to talk.',
        response: 'For serious collaboration, I usually reply the same day',
        quickTitle: 'Start a conversation',
        copyEmail: 'Copy email',
        copyPhone: 'Copy phone',
        copiedEmail: 'Email copied.',
        copiedPhone: 'Phone number copied.',
        github: 'View GitHub',
        chips: ['Product delivery', 'Architecture advisory', 'Android team lead'],
      },
);
const contactCommandLines = computed(() =>
  isFa.value
    ? [
        '$ ./start-collaboration',
        '> scope = "android_product"',
        '> reply_window = "same_day"',
      ]
    : [
        '$ ./start-collaboration',
        '> scope = "android_product"',
        '> reply_window = "same_day"',
      ],
);

function handleSubmit() {
  status.value = isFa.value ? fa.contact.status : 'Thanks. Your message draft is ready in your email client.';
  const subject = encodeURIComponent(isFa.value ? fa.contact.subject : 'Portfolio inquiry');
  const body = encodeURIComponent(isFa.value ? fa.contact.body : 'Hi Amirreza,\n\nI would like to talk about...');
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

async function copyToClipboard(value: string, key: 'email' | 'phone') {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }

  copied.value = key;
  status.value = key === 'email' ? contactLabels.value.copiedEmail : contactLabels.value.copiedPhone;
  window.setTimeout(() => {
    if (copied.value === key) copied.value = '';
  }, 1600);
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
      <div class="contact-command-panel" aria-label="Contact shortcuts">
        <span class="contact-orbit contact-orbit-one" aria-hidden="true"></span>
        <span class="contact-orbit contact-orbit-two" aria-hidden="true"></span>
        <span class="contact-scanline" aria-hidden="true"></span>
        <p class="contact-panel-label">{{ contactLabels.quickTitle }}</p>
        <div class="contact-signal">
          <span class="signal-dot" aria-hidden="true"></span>
          <div>
            <strong>{{ contactLabels.availability }}</strong>
            <span>{{ contactLabels.response }}</span>
          </div>
        </div>

        <div class="contact-cli" aria-label="Command line status">
          <code v-for="line in contactCommandLines" :key="line" class="code-line">{{ line }}</code>
        </div>

        <div class="contact-quick-actions">
          <button type="button" class="copy-contact-button" @click="copyToClipboard(profile.email, 'email')">
            <Check v-if="copied === 'email'" :size="17" aria-hidden="true" />
            <Clipboard v-else :size="17" aria-hidden="true" />
            {{ copied === 'email' ? contactLabels.copiedEmail : contactLabels.copyEmail }}
          </button>
          <button type="button" class="copy-contact-button" @click="copyToClipboard(profile.phone, 'phone')">
            <Check v-if="copied === 'phone'" :size="17" aria-hidden="true" />
            <Clipboard v-else :size="17" aria-hidden="true" />
            {{ copied === 'phone' ? contactLabels.copiedPhone : contactLabels.copyPhone }}
          </button>
        </div>

        <div class="contact-tags">
          <span v-for="chip in contactLabels.chips" :key="chip">
            <Rocket :size="15" aria-hidden="true" />
            {{ chip }}
          </span>
        </div>
      </div>
      <div class="social-row">
        <a href="https://github.com/amirrezaHaghani" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Code2 :size="20" aria-hidden="true" />
        </a>
        <a :href="`mailto:${profile.email}`" :aria-label="isFa ? 'ارسال ایمیل' : 'Send email'">
          <MessageSquare :size="20" aria-hidden="true" />
        </a>
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Android%20Collaboration%20with%20Amirreza%20Haghani" target="_blank" rel="noreferrer" :aria-label="isFa ? 'برنامه‌ریزی جلسه' : 'Schedule a call'">
          <CalendarCheck :size="20" aria-hidden="true" />
        </a>
      </div>
    </div>

    <form class="contact-form reveal" @submit.prevent="handleSubmit">
      <span class="form-energy-ring" aria-hidden="true"></span>
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
