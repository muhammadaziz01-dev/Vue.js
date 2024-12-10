<template>
  <div class="wrapper">
    <img :src="props?.dataCardElement?.link" :alt="dataCardElement?.alert" />
    <h2>{{ dataCardElement?.title }}</h2>
    <p>{{ dataCardElement?.description }}</p>
    <Button :isDan="props?.dataCardElement?.activ"/>

  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Button from "./Button.vue";
const props = defineProps({
  dataCardElement: {
    type: Object,
    required: true,
    default: () => ({
      title: "Title 1",
      link: "https://picsum.photos/id/123/300/250",
      alert: "alert text",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem qui nihil officia hic!",
      activ: false,
    }),
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  max-height: 400px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
