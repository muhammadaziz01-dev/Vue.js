<template>
  <div>
    <h1>Vue.js da dinamic classlar va computedni q'llas</h1>
    <button @click="handleClick">Handel click</button> 
    <div>
      <p :class="[ isSacses ? 'isSacsses' : 'isDanger']">Bu matin dinamic class yordamida , array sintx sida ishlamoqda</p>
      <p :class="{'isSacsses':isSacses , 'isDanger':!isSacses} ">Bu matin dinamic class yordamida , object sintx sida ishlamoqda</p>
      <p :class="computedClass">Bu matin computed sintx metodi yordamida ishlamoqda </p>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';  
const isSacses = ref(false);

const computedClass = computed(() => {
  return isSacses.value? 'isSacsses' : 'isDanger';
});

const handleClick = () => {
  isSacses.value =!isSacses.value;
};
</script>

<style  scoped>
.isSacsses{
  color: green;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5em;
}
.isDanger{
  color: red;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5em;
}
</style>