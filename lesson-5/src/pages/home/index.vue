<script setup></script>
<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <img
          class="wrapper-image"
          src="https://r2.erweima.ai/imgcompressed/img/compressed_e80321b4d9602b5cb1f261062635d30b.webp"
          alt="image"
        />
        <div class="wrapper--body">
          <h1 class="wrapper--body-title">Home page</h1>
          <p class="wrapper--body-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos rerum,
            magnam dolor harum laborum similique. Cum amet laudantium laboriosam incidunt
            ducimus nostrum nesciunt, vero quasi molestiae commodi inventore autem quos
            eos excepturi labore maxime, dolorum dolore fugit tempore! Exercitationem
            accusamus quia explicabo nulla tenetur quae omnis libero praesentium ea?
            Facere ab voluptatum enim repudiandae magnam velit dolor, modi ipsum et!
            Laboriosam tempore provident ipsam voluptatum fugit culpa adipisci iure
            eveniet magni. Harum quasi vitae deleniti saepe quibusdam magni numquam fuga
            quidem fugiat officiis nam debitis error odio pariatur quam sunt magnam,
            maiores necessitatibus molestias aut voluptatum cupiditate alias quaerat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper-image {
  width: 50%;
  height: auto;
}

.wrapper--body {
  width: 50%;
  padding: 20px;
}

.wrapper--body-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.wrapper--body-info {
  text-align: center;
  line-height: 1.6;
  margin-bottom: 30px;
}
</style>
