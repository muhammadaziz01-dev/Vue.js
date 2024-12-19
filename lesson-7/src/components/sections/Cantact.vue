<template>
  <section id="cantact">
    <Container>
      <h3>Robototexnika kursiga qabul boshlangan !</h3>
      <Form />
    </Container>
  </section>
</template>

<script setup>
import Container from "../containers/container.vue";
import Form from "../ui/form.vue";
</script>

<style lang="scss" scoped>
#cantact {
  width: 100%;
  padding: 58px 0;

  h3 {
    width: 574px;
    padding: 17px 19px 17px 18px;
    justify-content: center;
    border-radius: 16px;
    background: #00b534;
    color: #fff;
    font-size: 28px;
    font-weight: 800;
    margin: 0 auto;
  }

  
}
</style>
