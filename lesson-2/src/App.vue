<template>
  <div class="container">
    <h2>{{ firstName }}</h2>
    <h2>{{ lastName }}</h2>
    <input v-model="firstName" type="text" placeholder="First Name" />
    <input v-model="lastName" type="text" placeholder="Last Name" />
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const firstName = ref("first name");
const lastName = ref("last name");

watch(firstName, (newVale, oldVale) => {
  console.log("old ", oldVale);
  console.log("new ", newVale);
});
</script>

<style lang="css" scoped>
.container {
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
