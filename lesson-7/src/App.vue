<template>
  <Loader v-if="loading" />
  <Layout v-else />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Layout from "./layout/index.vue";
import Loader from "./components/ui/loader.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>
