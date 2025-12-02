<script setup>
import {HeaderLinks} from "@/Models/MenuModel.js";

let borderCount = 25;
</script>

<template>
  <header>
    <div class="col-100 headerContainer">
      <div class="col-10 headerField left">
        <div class="headerLogoContainer">
          <div class="headerLogo"></div>
        </div>
      </div>
      <div class="col-90 headerField right">
        <div class="col-10 main-menu" v-for="link in HeaderLinks">
          <RouterLink class="main-menu-link" :to="{name: link.linkName, }">{{link.label}}</RouterLink>
        </div>
      </div>
    </div>
    <div class="col-100 headerBottom">
      <div
          v-for="n in borderCount"
          :key="n"
          class="col-4 BottomheaderField"
      ></div>
    </div>
  </header>

</template>

<style scoped>

header {
  height: 100%;
}

.headerContainer {
  height: 60%;
  display: flex;
  background: linear-gradient(rgba(var(--bs-header-bg-rgb), 0.9), rgba(var(--bs-header-bg-rgb), 0.6), rgba(var(--bs-header-bg-rgb), 0.4));
}

.headerField {
  height: 100%;
  margin: 0;
  padding: 0;
}

.left {
  align-content: center;
}

.headerLogoContainer {
  width: 80%;
  height: 80%;
  margin: auto;
}

.headerLogo {
  width: 100%;
  height: 100%;
  margin: auto;
  background-image: url("/Logo3.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}

.right {
  display: flex;
  align-content: center;
  justify-content: right;
  align-items: center;
  text-align: center;
}

.main-menu {
  margin-right: 15px;
}

.main-menu-link {
  width: 100%;
  font-size: 3vh;
  font-style: italic;
  text-decoration: none;
  color: rgb(var(--bs-body-color-rgb));
}

.headerBottom {
  display: flex;
  height: 40%;
  background-color: rgba(var(--bs-header-bg-rgb), 0.4);
}

.BottomheaderField {
  visibility: visible;
  height: 100%;
  padding: 0;
  background-color: rgb(194, 80, 96);
  border-radius: 100px 45px 0 0;
  box-shadow: inset rgba(var(--bs-header-bg-rgb), 0.9) 0px 4px 0px -2px;
}


</style>