<script setup>
import { useRoute } from "vue-router";
import {HeaderLinks} from "@/Models/MenuModel.js";

const route = useRoute();

let borderCount = 35;
</script>

<template>
  <header>
    <div class="col-100 headerContainer">
      <div class="col-10 headerField left">
        <div class="headerLogoContainer">
          <div class="headerName">
            FintVell
          </div>
        </div>
      </div>
      <div class="col-90 headerField right">
        <div class="col-10 main-menu" v-for="link in HeaderLinks">
          <RouterLink :class=" route.name === link.name ? 'active-link' : 'main-menu-link'" :to="{name: link.linkName, }">{{link.label}}</RouterLink>
        </div>
      </div>
    </div>
    <div class="col-100 headerBottom">
      <div
          v-for="n in borderCount"
          :key="n"
          class="col-4 BottomheaderField"
      >
        
      </div>
    </div>
  </header>

</template>

<style scoped>

header {
  height: 100%;
  z-index: 1;
}

.headerContainer {
  height: 50%;
  display: flex;
  background: rgba(var(--bs-header-bg-rgb), 1);
  z-index: 1;
}

.headerField {
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.left {
  align-content: center;
  z-index: 1;
}

.headerLogoContainer {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  margin: auto;
  z-index: 1;
}

.headerName {
  position: relative;
  width: 50%;
  text-align: center;
  justify-content: center;
  align-content: center;
  font-family: "Allura", cursive;
  font-size: 3.5vh;
  font-weight: bolder;
  color: rgb(var(--bs-body-bg-rgb), 0.7);
}

.right {
  display: flex;
  height: 100%;
  justify-content: end;
  align-items: center;
  z-index: 1;
}

.main-menu {
  margin-right: 2%;
  text-align: center;
  z-index: 1;
}

.main-menu-link {
  width: 100%;
  text-align: center;
  font-size: 3vh;
  font-style: normal;
  font-family: 'Allura', cursive;
  text-decoration: none;
  padding: 0;
  color: rgb(var(--bs-body-bg-rgb));
  z-index: 1;
}

.active-link {
  width: 100%;
  text-align: center;
  font-size: 3vh;
  font-family: 'Allura', cursive;
  font-weight: bold;
  text-decoration: none;
  padding: 0;
  color: rgb(var(--bs-header-color-rgb));
  z-index: 1;
}

.headerBottom {
  display: flex;
  height: 30%;
  background: linear-gradient(to bottom, rgba(var(--bs-header-bg-rgb), 1), rgba(var(--bs-header-bg-rgb), 0.6), rgba(var(--bs-header-bg-rgb), 0.2), rgba(var(--bs-header-bg-rgb), 0) );
  z-index: 1;
}

.BottomheaderField {
  visibility: visible;
  display: block;
  height: 100%;
  justify-items: start;
  padding: 0;
  margin: 0;
  z-index: 1;
}


@media screen and (max-width: 800px) {
  .main-menu-link {
    font-size: 2vh;
  }
}

@media screen and (max-width: 500px) {
  .main-menu {
    width: 15%;
  }
}
</style>