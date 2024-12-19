<template>
  <section id="location">
    <div class="location--wrrapper">
      <div class="location--wrrapper--left">
        <div class="location--wrrapper--left--info">
          <img src="../../assets/icons/logo.svg" alt="logo pdp" />
          <h1>
            Toshkent sh., Shayxontohur <br />
            tum., Beruniy ko’ch., 3A-uy
          </h1>
        </div>
      </div>
      <div class="location--wrrapper--right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3081134669105!2d69.23931447587526!3d41.32391297130791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8582251c2d%3A0x1c2ee4f256515150!2sPDP%20Junior!5e0!3m2!1sru!2s!4v1734599356069!5m2!1sru!2s"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#location {
  width: 100%;
  height: 507px;

  .location--wrrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &--left {
      width: 50%;
      height: 100%;
      background-image: url(../../assets/images/pdp-unver.png);
      background-position: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
      position: relative;

      &--info {
        display: flex;
        width: 522px;
        padding: 9px 46px;
        justify-content: center;
        align-items: center;
        gap: 18px;
        border-radius: 40px;
        background: #fff;
        box-shadow: 0px 2px 10px 0px rgba(1, 42, 48, 0.3);
        position: absolute;
        bottom: 37px;
        left: 50%;
        transform: translateX(-50%);

        h1 {
          color: #00282f;
          font-size: 23px;
          font-weight: 500;
        }
      }
    }

    &--right {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
