<template>
  <div class="wrapperApp">
     <h3>App </h3>
       <ComponentA :propsCar="car" />
  </div>
</template>

<script setup>
import {provide , reactive} from "vue";
import ComponentA from "./components/component-a.vue";

const car = reactive({
  brand: "Toyota",
  model: "Camry",
  year: 2021,
  color: "blue",
  description: "This is a great car!",
  price: 30000,
})

provide("car", car);

</script>

<style  scoped>
.wrapperApp{
  width: 100%;
  height: 100vh;
  background-color: #9ffd25;
  padding: 100px;
}
</style>