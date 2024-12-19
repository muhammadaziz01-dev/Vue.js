<template>
  <section class="inso-section">
    <h2>{{ title }}</h2>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Default Title",
  },
});
</script>

<style lang="scss" scoped>
.inso-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00b534;
  padding: 20px 0px 20px;

  h2 {
    color: #fff;
    font-size: 33px;
    font-weight: 800;
  }
}
</style>
