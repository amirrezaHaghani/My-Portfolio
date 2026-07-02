<script setup lang="ts">
const mascotStyles = ['hello', 'wink', 'nod', 'spark', 'peek'] as const;
const mascotStyle = mascotStyles[Math.floor(Math.random() * mascotStyles.length)];
const mascotId = Math.random().toString(36).slice(2, 9);
const bodyGradientId = `android-body-${mascotId}`;
const screenGradientId = `android-screen-${mascotId}`;
const glowId = `android-glow-${mascotId}`;
</script>

<template>
  <span class="android-mascot" :class="`android-mascot--${mascotStyle}`" aria-hidden="true">
    <svg class="android-avatar" viewBox="0 0 96 112" focusable="false">
      <defs>
        <linearGradient :id="bodyGradientId" x1="22" y1="10" x2="76" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#b8ffe7" />
          <stop offset="0.42" stop-color="#4dffbf" />
          <stop offset="1" stop-color="#14b881" />
        </linearGradient>
        <linearGradient :id="screenGradientId" x1="28" y1="47" x2="70" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#102333" />
          <stop offset="1" stop-color="#061018" />
        </linearGradient>
        <filter :id="glowId" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#4dffbf" flood-opacity="0.45" />
        </filter>
      </defs>

      <g class="android-avatar-core" :filter="`url(#${glowId})`">
        <path class="android-antenna android-antenna-left" d="M31 19 21 5" />
        <path class="android-antenna android-antenna-right" d="M65 19 75 5" />

        <g class="android-head">
          <path
            d="M24 34c0-13.3 10.8-24 24-24s24 10.7 24 24v6H24v-6Z"
            :fill="`url(#${bodyGradientId})`"
          />
          <path d="M28 31c3.2-9.4 10.5-14.8 20-14.8 8.8 0 16 4.7 19.5 13.2" fill="none" stroke="#d8fff2" stroke-opacity=".7" stroke-width="2" stroke-linecap="round" />
          <circle class="android-eye android-eye-left" cx="39" cy="29" r="4" />
          <circle class="android-eye android-eye-right" cx="57" cy="29" r="4" />
          <path class="android-mouth" d="M43 36c2.8 2 7.2 2 10 0" fill="none" stroke="#061018" stroke-linecap="round" stroke-width="2.4" />
        </g>

        <path class="android-arm android-arm-left" d="M20 48c-8 5-10 19-4 29" />
        <path class="android-arm android-arm-right" d="M76 48c8 5 10 19 4 29" />

        <g class="android-body">
          <rect x="25" y="42" width="46" height="49" rx="13" :fill="`url(#${bodyGradientId})`" />
          <rect class="android-panel" x="33" y="52" width="30" height="26" rx="8" :fill="`url(#${screenGradientId})`" />
          <path class="android-panel-line" d="M39 61h18M39 69h12" />
          <circle class="android-heart" cx="58" cy="69" r="2.5" />
        </g>

        <path class="android-leg android-leg-left" d="M38 88v15" />
        <path class="android-leg android-leg-right" d="M58 88v15" />
      </g>

      <g class="android-sparks">
        <path class="android-spark android-spark-one" d="M14 31h10M19 26v10" />
        <path class="android-spark android-spark-two" d="M76 85h10M81 80v10" />
      </g>
    </svg>
  </span>
</template>
