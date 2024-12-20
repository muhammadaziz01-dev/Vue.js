<template>
  <section id="curs">
    <Container>
      <div class="curs--wrapper">
        <Card v-for="(el ,i ) in kursInfo" :key="i" :data="el" />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "../containers/container.vue";
import Card from "../ui/card.vue";
import Imag1 from "../../assets/images/kurs1.png";
import Imag2 from "../../assets/images/kurs2.png";
import Imag3 from "../../assets/images/kurs3.png";
import Imag4 from "../../assets/images/kurs4.png";

const kursInfo = [
  {
    title: "Robototexnika",
    img: Imag1,
    isNew: true,
    description:
      "Frontend development kursi pdp kids loyihasining yosh jihatidan uchinchi kursi hisoblanadi. Bu kursda o’quvchilar  web sahifalarning bizga ko'rinadigan vizual qismini yaratishadi. ",
    dadlaine: "8 oy",
    age_range: "10 - 17",
  },
  {
    title: "Frontend",
    img: Imag2,
    isNew: false,
    description:
      "Frontend development kursi pdp kids loyihasining yosh jihatidan uchinchi kursi hisoblanadi. Bu kursda o’quvchilar  web sahifalarning bizga ko'rinadigan vizual qismini yaratishadi. ",
    dadlaine: "10 oy",
    age_range: "10 - 14",
  },
  {
    title: "Python",
    img: Imag3,
    isNew: false,
    description:
      "Bolalar Python dasturlash tili misolida boshlang'ich dasturlash asoslarini mukammal o'rganishib bilim va ko'nikmalar hosil qiladi. Dasturlash sohasining asosiy tushunchalarini mustahkamlagan holda farzandingizda yangi bilim va ko'nikmalarni hosil qiladi.",
    dadlaine: "11 oy",
    age_range: "8 - 14",
  },
  {
    title: "Scratch development ",
    img: Imag4,
    isNew: false,
    description:
      "Scratch development kursi pdp kids loyihasining yosh jihatidan ikkinchi kursi hisoblanadi. Kompyuter savodxonligiga ega bo'lgan jajji dasturchilar uchun kirish kursi hisoblandi. Oddiy dasturlash kurslaridan farqli o'laroq qiziqarli rang-barang bloklar bilan o'rgatiladi.",
    dadlaine: "9 oy",
    age_range: "8 - 12",
  },
];
</script>

<style lang="scss" scoped>
#curs {
  width: 100%;
  padding: 77px 0;

  .curs--wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 47px;

    &--parend {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &--card {
        width: 993px;
        height: 312px;
        border-radius: 31px;
        border: 1px solid #e6e6e6;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 89px;
        padding: 40px 65px;

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
  }
}
</style>
