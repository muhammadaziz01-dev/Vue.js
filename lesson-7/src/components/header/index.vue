<template>
  <header>
    <Container>
      <nav class="nav">
        <ul class="nav--list">
          <li class="nav--list--itim">
            <a href="#" class="nav--list--logo"
              ><img src="../../../public/pdp-logo.svg" alt="logo pdp unversity"
            /></a>
          </li>
          <li class="nav--list--itim">
            <a href="#" class="nav--list--itim-link">Kurslarimiz</a>
          </li>
          <li class="nav--list--itim">
            <a href="#" class="nav--list--itim-link">Bog’lanish</a>
          </li>
        </ul>
        <div class="nav--phone">
          <img src="../../assets/icons/phone.svg" alt="phone icon" />
          <span>(78) 777-47-47</span>
        </div>
      </nav>
    </Container>
  </header>
</template>

<script setup>
import Container from "../containers/container.vue";
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 18px 0;
  background: linear-gradient(90deg, #012a30 43.9%, #00b534 80.17%);

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--list {
      display: flex;
      align-items: center;
      gap: 33px;

      &--itim-link {
        color: #88f036;
        font-family: K2D;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    &--phone {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #fff;
      font-family: K2D;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}
</style>
