<template>
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>

            <div class="contant_box_404">
              <h3 class="h2">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>

              <button @click="goToSignIn" class="link_404">Go to Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goToSignIn() {
  router.push('/');
}
</script>

<style lang="scss" scoped src="./_style.scss"></style>
