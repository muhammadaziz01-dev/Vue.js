<template>
  <div class="wrapperA">
    <h3>Component A</h3>
    <p>{{ infoCar.brand }}</p>
    <p>{{ infoCar.model }}</p>
    <ComponentB @user="getEmit" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ComponentB from "./component-b.vue";

const prop = defineProps({
  infoCar: {
    type: Object,
    required: true,
    default: () => ({
      brand: "Toyota",
      model: "Camry",
      year: 2021,
      color: "blue",
      description: "This is a great car!",
      price: 30000,
    }),
  },
});

const getEmit = (e)=>{
    console.log(e.value);
    console.log( " getEmit componenta A");
}


</script>

<style scoped>
.wrapperA {
  background-color: rgb(56, 104, 121);
  padding: 30px;
  width: 100%;
  height: 100%;
}
</style>
