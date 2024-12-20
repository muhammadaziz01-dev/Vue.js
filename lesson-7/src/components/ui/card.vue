<template>
  <div class="curs--wrapper--parend" data-aos="zoom-in" data-aos-duration="1000">
    <div class="curs--wrapper--parend--card">
      <img :src="data?.img" :alt="data?.title" />
      <div class="curs--wrapper--parend--card--info">
        <h2>{{ data?.title }}</h2>
        <p>
          {{ data?.description }}
        </p>
        <div class="curs--wrapper--parend--card--info--statistica">
          <div class="curs--wrapper--parend--card--info--statistica--item">
            <h3>Davomiligi</h3>
            <p>{{ data?.dadlaine }}</p>
          </div>
          <div class="curs--wrapper--parend--card--info--statistica--item">
            <h3>Yosh chegarasi</h3>
            <p>{{ data?.age_range }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="curs--wrapper--parend--card-bg"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Imag1 from "../../assets/images/kurs1.png";

const props = defineProps({
  data: {
    typeof: Object,
    required: true,
    default: () => ({
      img: Imag1,
      title: "Frontend",
      description:
        "Frontend development kursi pdp kids loyihasining yosh jihatidan uchinchi kursi hisoblanadi. Bu kursda o’quvchilar  web sahifalarning bizga ko'rinadigan vizual qismini yaratishadi. ",
      dadlaine: "10 oy",
      age_range: "10-14",
      isNew: false,
    }),
  },
});
</script>

<style lang="scss" scoped>
.curs--wrapper--parend {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &--card {
    width: 993px;
    height: auto;
    border-radius: 31px;
    border: 1px solid #e6e6e6;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 89px;
    padding: 20px 65px 0;

    img {
      width: 188px;
      height: 196px;
      flex-shrink: 0;
    }

    &--info {
      h2 {
        color: #012a30;
        font-size: 33px;
        font-weight: 800;
      }
      p {
        color: #012a30;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.72px;
        margin-bottom: 34px;
      }
      &--statistica {
        display: flex;
        align-items: center;
        gap: 54px;

        &--item {
          h3 {
            color: #012a30;
            font-size: 23px;
            font-weight: 600;
          }
          p {
            color: #00b534;
            font-size: 26px;
            font-weight: 800;
            text-align: center;
          }
        }
      }
    }
  }

  &--card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 21px;
    background: #dbf9d8;
    transform: rotate(-178.788deg);
    z-index: -1;
  }
}
</style>
