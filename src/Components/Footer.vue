<script setup lang="ts">

</script>

<template>
<footer>
  <div class="col-28 left">
    
  </div>
  <div class="col-44 center">
    <p>
      Betill din time!
    </p>
    <br/>
    <button class="bestilling">
      Trykk her
    </button>
  </div>
  <div class="col-28 left">

  </div>
</footer>
</template>

<style scoped>

footer {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(var(--bs-header-color-rgb));
}

.center {
  align-content: center;
  text-align: center;
  text-decoration: underline;
  font-family: "Brush Script MT", cursive;
  font-style: italic;
  font-weight: normal;
  font-size: 5vh;
  color: rgb(var(--bs-body-bg-rgb));
}

.center p {
  display: inline-block;
  transform: rotate(-8deg);
}

.bestilling {
  padding: 2px 5px;
  font-weight: bold;
  background-color: rgb(var(--bs-body-bg-rgb));
  border-radius: 15px;
  color: rgb(var(--bs-header-color-rgb));
}

@media (max-width: 500px) {
  .center {
    font-size: 3.5vh;
  }
}

</style>