<script setup>
import Header from "@/Components/Header.vue";
import Footer from "../Components/Footer.vue";
import FrontPageLinks from "@/Components/FrontPageLinks.vue";
import DynamicDepartmentCard from "@/Components/DynamicDepartmentCard.vue";
</script>

<template>
  <Header />
  <main>
    <FrontPageLinks />
  </main>
  <Footer />
</template>

<style scoped>
Header {
  width: 100%;
  height: 15vh;
}

main {
  width: 100%;
  height: fit-content;
  min-height: 85vh;
}

Footer {
  width: 100%;
  height: 30vh;
  margin: 0;
  padding: 0;
}
</style>