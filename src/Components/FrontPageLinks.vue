<script setup>
import { ref } from "vue";
import { FrontPageLinks as frontPageLinksData } from "@/Models/MenuModel.ts";
import Mapps from "@/Components/Mapps.vue";
const FrontPageLinks = ref(frontPageLinksData);

const amountOfDepartments = FrontPageLinks.value.filter(d => d.isActive == true);

</script>

<template>
  <div class="banner">
    <div class="banner-content">
      <div class="content-one">
        Vår ekspertise
      </div>
      <div class="content-two">
        Din velvære
      </div>
    </div>
  </div>
  <div class="container">
    <div class="departments-head">
      <div class="departments-head-title">
        Vi tilbyr
      </div>
    </div>
    <div class="department" v-for="link in FrontPageLinks.filter(l => l.isActive)" :key="link.name">
      <div class="head">
          <div class="head-top">
            {{link.label}}
          </div>
          <div class="head-bottom">
          </div>
      </div>
      <div class="dep-inf">
          <div class="img-container">
            <img src="/FintVelLogoUtenTekst.png" alt="hhaah" />
          </div>
      </div>
    </div>
    <div class="departments-generell">
      Vi behandler kundene våre med respekt.
      <br/>
      Vi hjelper deg finne dit ønske.
      <br/>
      Vi har kompetansen.
    </div>
  </div>
  <div class="second-container">
    <div class="header-container">
      <div class="galleri-header">
        Se vårt galleri
      </div>
    </div>
    <div class="gallery-container" v-for="link in FrontPageLinks">
      <div class="gallery">
        <div class="gallery-image-container" @click="">
          <div class="gallery-label">
            {{link.pictures[0].label}}
          </div>
          <div class="gallery-image">
            <img :src="link.pictures[0].url" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="theard-container">
    <div class="theard-content-head">
      Om Oss
    </div>
    <div class="theard-content-info">
      Vi er en moderne velvære- og skjønnhetssalong med fokus på kvalitet, presisjon og personlig service. Hos oss står kundens velvære i sentrum, og vi jobber målrettet for å gi deg et øyeblikk av ro i en travel hverdag – samtidig som vi fremhever din naturlige skjønnhet.

      Salongen spesialiserer seg på vipper og tilbyr behandlinger som er skreddersydd dine ønsker og behov. Vi benytter oss av nøye utvalgte produkter og oppdaterte teknikker for å sikre trygge behandlinger og et resultat du kan føle deg komfortabel og fornøyd med. I tillegg tilbyr vi ulike velværebehandlinger som gir både kropp og sinn en pause.

      Vårt mål er at du alltid skal føle deg sett, ivaretatt og velkommen. Enten du kommer til oss for en rask oppfriskning eller en lengre velværestund, ønsker vi å gi deg en profesjonell opplevelse i rolige og behagelige omgivelser.
    </div>
    <div class="theard-content-map">
      <Mapps class="mapps" />
    </div>
    <div>
      
    </div>
  </div>
</template>

<style scoped src="../Styles/FrontPageLinks.css">


</style>