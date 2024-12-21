<template>
  <div class="wrapperB">
    <h3>Component B</h3>
    <h3>Car brand: {{ cardInfo?.brand }}</h3>
    <h3>Car model: {{ cardInfo?.model }}</h3>
    <h3>Car year: {{ cardInfo?.year }}</h3>
    <h3>Car color : {{ cardInfo?.color }}</h3>
    <h3>Car description: {{ cardInfo?.description }}</h3>
    <h3>Car price: {{ cardInfo?.price + "$" }}</h3>
  </div>
</template>

<script setup>
import {inject} from "vue";

const cardInfo = inject("car")


</script>

<style scoped>

  .wrapperB {
    background-color: rgb(212, 211, 212);
    padding: 40px;
    width: 100%;
    height: 100%;
  }
</style>
