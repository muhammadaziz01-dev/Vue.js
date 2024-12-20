<template>
  <section id="hero">
    <Container>
      <div class="hero--wrapper" data-aos="fade-right" data-aos-duration="1000" >  
        <div class="hero--wrapper--card">
          <h1 class="hero--wrapper--card-title">
            PDP Junior – IT kelajakni shu yerdan boshlang!
          </h1>
          <div class="hero--wrapper--card--body">
            <div
              class="hero--wrapper--card--body--info"
              v-for="(el, i) in cardInfo"
              :key="i"
            >
              <h3 class="hero--wrapper--card--body--info-num">{{ el?.title }}</h3>
              <div class="hero--wrapper--card--body--info-title">
                <h3>
                  {{ el?.infoTitle }}
                </h3>
                <p>{{ el?.infoText }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hero--wrapper--card-bg"></div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "../containers/container.vue";

const cardInfo = [
  {
    title: "1",
    infoTitle: "Sifatli Ta’lim",
    infoText: "5 yildan beri katta-yu kichik dasturchilarni yetishtirib chiqarmoqda",
  },
  {
    title: "2",
    infoTitle: "Bilim va ko’nikma",
    infoText: "Yoshlar dasturlash va tanqidiy fikrlash ko'nikmalariga ega bo'lishmoqda",
  },
  {
    title: "3",
    infoTitle: "Natija",
    infoText: "Algoritmlar orqali masalalar yechib, kichik oʻyinlar yasashmoqda",
  },
];
</script>

<style lang="scss" scoped>
#hero {
  background-image: url(../../assets/images/hero-bg.png);
  background-position: center;
  background-size: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 772px;
  flex-shrink: 0;

  .hero--wrapper {
    width: 100%;
    height: 772px;
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;

    &--card {
      width: 483px;
      height: 456px;
      flex-shrink: 0;
      border-radius: 21px;
      border: 1px solid #e6e6e6;
      background: #fff;
      padding: 33px;
      z-index: 10;

      &-title {
        color: #012a30;
        font-size: 31px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-bottom: 15px;
      }

      &--body {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 23px;

        &--info {
          display: flex;
          align-items: start;
          gap: 20px;

          &-num {
            width: 45px;
            height: 45px;
            flex-shrink: 0;
            background-color: #dbf9d8;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: #012;
            font-size: 27px;
            font-weight: 800;
          }

          &-title {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 9px;

            h3 {
              color: #00b534;
              font-size: 21px;
              font-weight: 800;
            }

            p {
              color: #012a30;
              font-size: 17px;
              font-weight: 400;
            }
          }
        }
      }
    }

    &--card-bg {
      position: absolute;
      top: 158px;
      left: 0;
      width: 482.785px;
      height: 456.419px;
      transform: rotate(5.383deg);
      flex-shrink: 0;
      border-radius: 21px;
      background: #dbf9d8;
    }
  }
}
</style>
