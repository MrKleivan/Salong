<script setup>
import { ref } from "vue";
import { FrontPageLinks as frontPageLinksData } from "@/Models/MenuModel.ts";
const FrontPageLinks = ref(frontPageLinksData);

let widthOfFrontpageLinks = 90 / (FrontPageLinks.value.filter(l => l.isActive).length);
let width = window.innerWidth;
let height = window.innerHeight;

if (width < 600) {
  widthOfFrontpageLinks = 90;
}

console.log(height);

function visiblePictures(link){
  console.log(link.name);
  let imagesForDisplay = [];
  let startIndex = link.index;
  let amountOfPictures = link.pictures.length;
  let endIndex = startIndex + amountOfPictures;
  let adjustedIndex = 0;
  
  for (let i = startIndex; i < endIndex; i++) {
    if ( i >= link.pictures.length) {
      imagesForDisplay.push(link.pictures[adjustedIndex]);
      console.log('nu');
      adjustedIndex++;
    }
    else {
      imagesForDisplay.push(link.pictures[i]);
    }
  }
  return imagesForDisplay;
}

function AdjustGallery(direction, link) {
  switch (direction) {
    case "left":
      link.index--;
      if(link.index < 0){
        link.index = link.pictures.length - 1;
      }
      break;
    case "right":
      link.index++;
      if(link.index > link.pictures.length - 1){
        link.index = 0;
      }
      break;
  }
}

</script>

<template>
  <div class="container">
    
    <main v-for="link in FrontPageLinks.filter(l => l.isActive)" :key="link.name" :style="{ width: widthOfFrontpageLinks + '%' }" >
      <header>
        {{link.label}}
      </header>
      <div class="content">
        <nav v-for="underLink in link.underLinks" key="underLink.name" class="under-link">
          <a :href="underLink.linkName">{{underLink.label}}</a><br/>
        </nav>
        <div class="department-info">
          <div class="description">
            {{link.description}}
          </div>
        </div>
        <div class="under-links-container">
          <div class="col-100 right">
              <button @click="AdjustGallery('left', link)">◄</button>
            <div class="image-container">
              <div class="image" v-for="pic in visiblePictures(link)" :key="pic.label">
                <img :src="pic.url"/>
              </div>
            </div>
              <button @click="AdjustGallery('right', link)">►</button>
          </div>
        </div>
      </div>
    </main>
  </div>
  
</template>

<style scoped>

.container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
}

main {
  height: 50vh;
  min-height: 350px;
  margin: auto;
  margin-top: 10vh;
  text-align: center;
  background: rgba(var(--bs-header-bg-rgb), 0.4);
  border-radius: 30px 30px 10px 10px;
  overflow: hidden;
}

header {
  width: 100%;
  height: 10%;
  align-content: center;
  color: rgb(var(--bs-body-color-rgb));
  font-weight: bolder;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
  background: rgba(var(--bs-header-bg-rgb), 0.5);
}

.content {
  width: 100%;
  height: 90%;
  border-radius: 0px 0px 10px 10px;
  box-shadow: inset 0px 0px 2px 2px rgba(var(--bs-header-bg-rgb), 0.5);
}

.department-info {
  width: 80%;
  height: 20%;
  margin: auto;
}

.description {
  width: 100%;
  min-height: 70%;
  max-height: 100%;
  margin: auto;
  align-content: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  font-size: 1em;
  color: rgb(var(--bs-body-color-rgb));
  border-bottom: 1px solid rgba(var(--bs-body-bg-rgb), 0.9);
  text-shadow: 2px 2px 9px rgba(var(--bs-header-bg-rgb), 0.5);
}

.under-links-container {
  width: 80%;
  height: 80%;
  margin: auto;
}

.right {
  display: flex;
  height: 75%;
  border-radius: 20px;
  overflow: hidden;
}

.image-container {
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: rgba(var(--bs-header-bg-rgb), 0.2);
}

.image {
  width: 18%;
  height: 100%;
  margin: auto;
}

.image img {
  width: 100%;
  height: 100%;
  margin: auto;
  border: 1px solid rgba(var(--bs-header-bg-rgb), 1);
  border-radius: 10px;
}


nav {
  display: inline-block;
  overflow: visible;
  margin: auto;
  border: 2px solid rgba(var(--bs-body-bg-rgb), 0.8);
  border-radius: 5px;
}

a {
  font-size: 0.8em;
  text-decoration: none;
  padding: 1px;
  color: rgb(var(--bs-body-color-rgb));
}

nav:hover {
  background-color: rgb(var(--bs-header-bg-rgb));
}

button {
  border: none;
  background-color: rgba(var(--bs-header-bg-rgb), 0.5);
}


</style>