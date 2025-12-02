<script setup>
import Header from "@/components/Header.vue";
import Footer from "../Components/Footer.vue";
import FrontPageLinks from "@/Components/FrontPageLinks.vue";
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
  height: 15vh;
}
</style>