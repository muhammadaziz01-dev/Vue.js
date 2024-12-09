<template>
 <About :massege="massege"/>
</template>

<script setup>
import { ref, computed } from "vue";
import About from "./components/Abuot.vue"

const massege = ref("vue.js props");
</script>

<style scoped></style>
