<template>
  <footer id="footer">
    <Container>
      <div class="footer--top">
        <img :src="logo" alt="PDP junior" class="footer--top--logo" />
        <div class="footer--top--icon-wrapp">
          <a href="https://t.me/pdpuniversity" target="_blank">
            <img :src="TelegramIcon" alt="telegram" />
          </a>
          <a href="https://www.instagram.com/pdp.university/" target="_blank">
            <img :src="InstagramIcon" alt="instagram" /> </a
          ><a href="https://www.youtube.com/@PDPUniversity" target="_blank">
            <img :src="YotubeIcon" alt="yotube" />
          </a>
        </div>
        <h2>(78) 777-47-47</h2>
      </div>
      <div class="footer--bottom">
        <p>©2022 PDP Academy</p>
        <p>Xizmatlar litsenziyalangan</p>
      </div>
    </Container>
  </footer>
</template>

<script setup>
import logo from "../../../public/pdp-logo.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import YotubeIcon from "../../assets/icons/yotube.svg";
import Container from "../containers/container.vue";
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 39px 0;
  background: #012a30;

  .footer--top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 22px;
    border-bottom: 1px solid #dbf9d8;

    &--logo {
      width: 138.983px;
      height: 38px;
      flex-shrink: 0;
    }

    &--icon-wrapp {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    h2 {
      color: #dbf9d8;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .footer--bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    p {
      color: #dbf9d8;
      font-size: 12px;
      font-weight: 500;
    }
  }
}
</style>
