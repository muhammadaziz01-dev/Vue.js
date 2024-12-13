<template>
  <div class="container text-center">
    <h1>Second page</h1>
    <router-link to="/">home page</router-link>
    <p>{{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const router = useRoute();
const id = router.params.id;
</script>

<style lang="scss" scoped></style>
