<template>
  <div class="wrapper" >

  <About v-for="(el, i) in dataCard" :dataCardElement="el" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import About from "./components/Abuot.vue";

const dataCard = ref([
  {
    id: "1",
    title: "Title 1",
    link: "https://picsum.photos/id/123/300/250",
    alert: "alert text",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem qui nihil officia hic!",
    activ: false,
  },
  {
    id: "2",
    title: "Title 2",
    link: "https://picsum.photos/id/46/300/250",
    alert: "alert text 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas qui, quae voluptatibus officiis explicabo?",
    activ: true,
  },
  {
    id: "3",
    title: "Title 3",
    link: "https://picsum.photos/id/459/300/250",
    alert: "alert text 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quas, perspiciatis sunt, cumque quia, fugit voluptatibus voluptatum ea rerum!",
    activ: true,
  },
  {
    id: "4",
    title: "Title 4",
    link: "https://picsum.photos/id/204/300/250",
    alert: "alert text 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cumque, quo veniam error, vitae voluptas expedita voluptatum delectus autem?",
    activ: false,
  },
]);
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 70vh;
  padding: 40px 20px;
  background-color: #f0f0f0;
}
</style>
