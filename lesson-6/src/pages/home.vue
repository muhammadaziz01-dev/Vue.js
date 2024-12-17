<template>
    <div class="container">
     <h1 class="text-center">Home page </h1>
     <table class="table table-bordered">
    <thead>
      <tr>
        <th>T/R</th>
        <th>Name</th>
        <th>Year</th>
        <th>Price</th>
        <th>Color</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(el,i) in dataCard" :key="el.id">
        <td>{{ i + 1 >= 10 ? i + 1 : '0'+( i + 1)  }}</td>
        <td>{{ el.name }}</td>
        <td>{{ el.year }}</td>
        <td>{{ el.price }}</td>
        <td>{{ el.color }}</td>
        
        <td>
          <router-link class="btn btn-outline-info" :to="{path:`/second/`+el?.id }" > second</router-link> 
        </td>
      </tr>
    </tbody>
  </table>
    </div>
</template>

<script setup>
import {reactive} from "vue";

const dataCard = reactive([
    {id:1, name:"Mercedes",year:2000, price:"35.000$", color:"white"},
    {id:2, name:"BMW", year:2010, price:"20.000$", color:"black"},
    {id:3, name:"Audi", year:2015, price:"25.000$", color:"silver"},
    {id:4, name:"Ford", year:2020, price:"30.000$", color:"red"},
    {id:5, name:"Toyota", year:2018, price:"28.000$", color:"blue"},
    {id:6, name:"Honda", year:2012, price:"22.000$", color:"green"},
    {id:7, name:"Nissan", year:2017, price:"23.000$", color:"orange"},
    {id:8, name:"Volkswagen", year:2021, price:"32.000$", color:"purple"},
    {id:9, name:"Chevrolet", year:2016, price:"26.000$", color:"brown"},
    {id:10, name:"Fiat", year:2019, price:"24.000$", color:"pink"},
    {id:11, name:"Mazda", year:2014, price:"27.000$", color:"yellow"},
    {id:12, name:"Subaru", year:2013, price:"21.000$", color:"gray"},
])
</script>

<style lang="scss" scoped>

</style>