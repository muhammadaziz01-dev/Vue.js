<template>
  <section id="intro">
    <Container>
      <div class="intro--wrapper" data-aos="fade-left" data-aos-duration="1000">
        <div class="intro--wrapper--card">
          <div class="intro--wrapper--card--top-info">
            <h2>Asosan 8 -17 yoshdagi bolalar uchun</h2>
            <p>
              Bolarda dasturlash yo’nalishiga birinchi qadam tashlash, kompyuter
              savodxonligini oshirish, mantiqiy fikrlashni kengaytirish, matematik
              bilimlarni takomillashtirish.
            </p>
          </div>
          <div class="intro--wrapper--card--boton-info">
            <h2>Farzandiga befarq boʻlmagan ota-onalar</h2>
            <p>
              Farzandining til oʻrganishini xohlaydigan va bunga sharoit yaratib
              beradigan.
            </p>
            <p>Kelajakda farzandining katta yutuqlaridan faxrlanib yurishni istagan.</p>
            <p>
              Farzandining kelajagi uchun hozirdan bilimga investitsiya qiladigan
              ota-onalar uchun moʻljallangan.
            </p>
          </div>
        </div>
        <div class="intro--wrapper--card-bg"></div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "../containers/container.vue";
</script>

<style lang="scss" scoped>
#intro {
  background-image: url(../../assets/images/intro-bg.png);
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
  height: 688px;

  .intro--wrapper {
    width: 100%;
    height: 688px;
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;

    &--card {
      width: 586px;
      height: 546px;
      flex-shrink: 0;
      border-radius: 21px;
      border: 1px solid #e6e6e6;
      background: #fff;
      padding: 41px 28px;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 63px;
      z-index: 10;
      

      h2 {
        color: #012;
        font-size: 28px;
        font-weight: 800;
      }

      p {
        color: #012a30;
        font-size: 21px;
        font-weight: 400;
      }

      &--boton-info p {
        margin: 0 0 15px 19px;
        position: relative;

        &::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #012;
          position: absolute;
          left: -19px;
          top: 13px;
        }
      }
    }

    &--card-bg {
      width: 584.95px;
      height: 546.389px;
      transform: rotate(-174.552deg);
      flex-shrink: 0;
      border-radius: 21px;
      background: #dbf9d8;
      position: absolute;
      z-index: 5;
    }
  }
}
</style>
