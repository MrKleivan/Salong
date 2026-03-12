<script setup>
import { ref } from "vue";
import { FrontPageLinks as frontPageLinksData } from "@/Models/MenuModel.ts";
import FintVelLogo from "@/Components/FintVelLogo.vue";
const Deparment = ref(frontPageLinksData.find(d => d.name == 'Lashes'));

</script>

<template>
  
  <div class="dep-card">
    <div class="dep-card__header">
      <div class="dep-card__header-title">
        {{ Deparment.label }}
      </div>
      <div class="dep-card__header-empty-div">
        
      </div>
    </div>
    <div class="dep-card__body">
      <FintVelLogo class="dep-card__logo"/>
    </div>
  </div>
  
</template>

<style scoped>

.dep-card {
  margin: auto;
  aspect-ratio: 4 / 1;
  max-width: 20%;
  min-width: 280px;
 }

.dep-card__header-title {
  width: 100%;
  text-align: center;
}

.dep-card__body {
  width: 70%;
  margin: auto;
}

.dep-card__logo {
  width: 80%;
  height: auto;
  color: rgba(var(--bs-header-bg-rgb), 0.6);
}


</style>