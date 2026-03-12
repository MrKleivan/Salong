<script setup lang="ts">
import { computed } from 'vue'

const address = 'Schweigaards gate 61A, 0656 oslo'

const embedSrc = computed(() => {
  const q = encodeURIComponent(address)
  return `https://www.google.com/maps?q=${q}&output=embed`
})

const googleMapsLink = computed(() => {
  const q = encodeURIComponent(address)
  return `https://www.google.com/maps/search/?api=1&query=${q}`
})
</script>

<template>
  <div class="map-wrap">
    <iframe
        class="map"
        :src="embedSrc"
        style="border:0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
    />
    <div class="actions">
      <a class="btn" :href="googleMapsLink" target="_blank" rel="noopener">
        Åpne i Google Maps
      </a>
    </div>
  </div>
</template>

<style scoped>
.map-wrap { position: relative; width: 100%; height: 100%;}
.map { position: absolute; inset: 0; object-fit: cover; object-position: center; width: 100%; height: 100%; border-radius: 12px; }
.actions { height: fit-content; display: flex; justify-content: flex-end; z-index: 2; }
.btn {
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.12);
  z-index: 2;
}
</style>