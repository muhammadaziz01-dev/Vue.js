<template>
  <section id="cantact">
    <Container>
      <h3>Robototexnika kursiga qabul boshlangan !</h3>
      <form action="#" class="cantact--form">
        <h4>Hoziroq ro'yxatdan o'ting</h4>
        <p>va farzandingiz kelajagi uchun muhim qadamni tashlang</p>
        <div class="cantact--form--parent">
          <input type="text" placeholder="Ismingiz" />
          <input type="tel" placeholder="+998 -- --- -- --" />
        </div>
        <button type="submit">Yuborish</button>
      </form>
    </Container>
  </section>
</template>

<script setup>
import Container from "../containers/container.vue";
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

  .cantact--form {
    margin-top: 85px;

    h4 {
      color: #012a30;
      font-size: 32px;
      font-weight: 800;
      text-align: center;
    }

    p {
      color: rgba(0, 0, 0, 0.25);
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-align: center;
    }

    &--parent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 29px;
      padding: 40px 0;

      input {
        display: flex;
        width: 417px;
        padding: 19px 22px;
        align-items: center;
        border-radius: 16px;
        background: #dbf9d8;
        color: #012a30;
        font-size: 22px;
        font-weight: 800;
        outline: none;
        border: none;
      }
    }

    button {
      display: block;
      padding: 20px 33px 21px 31px;
      border-radius: 16px;
      background: #00b534;
      color: #fff;
      font-size: 22px;
      font-weight: 800;
      border: none;
      cursor: pointer;
      margin: 0 auto;
      transition: all 0.3s linear;

      &:hover {
        background: #00962b;
      }

    }
  }
}
</style>
