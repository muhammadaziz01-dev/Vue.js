<template>
   <main>
     <Hero/>
     <InnfoSection title="Bizning kurslarimiz kimga to’g’ri keladi ?" />
     <Intro/>
     <InnfoSection title="PDP Junior  kurslari" />
     <Curs/>
     <InnfoSection title="Bog’lanish uchun" />
      <Cantact/>
     <InnfoSection title="Manzil" />

   </main> 
</template>

<script setup>
import Hero from "../sections/Hero.vue";
import InnfoSection from "../ui/info-section.vue";
import Intro from "../sections/Intro.vue";
import Curs from "../sections/Curs.vue";
import Cantact from "../sections/cantact.vue";

</script>

<style lang="scss" scoped>

</style>