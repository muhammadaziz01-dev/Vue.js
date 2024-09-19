<template>
    <div>
     <h1>Test components</h1>
     <p>{{ new Date().getFullYear() + ". " + (new Date().getMonth() + 1 )   +". " + new Date().getDay()   + "  Vue.jd da  "  + testMassege  }}</p>

     <ul  >
       <li v-for="(el, index) in dataLeng" key="index" style="margin: 25px 0;">{{ index % 2 === 0 ?  el : `Qale bro 😶‍🌫️  ${index} ` }} <span v-if="index % 2 == 0 ">{{ index }}</span></li>
     </ul>
    </div>
</template>

<script setup>
let testMassege = " Bir sho'hlik qilamizmi ? 😉"
 
const dataLeng = [ "JavaScript" , "TaypScript" , "PHP" , "Java" , "GO" , "Python" , ".NET" , "C++" , "C#" ]
</script>

<style lang="scss" scoped>

</style>