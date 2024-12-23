<template>
    <section id="sginup">
      <div class="wrapper">
        <div class="wrapper--card">
          <h1>Sign Up</h1>
          <form @submit.prevent="submitForm">
            <label for="firsname">
              <span>Enter first name :</span>
              <input type="text" v-model="user.firstname" required  id="firsname"/>
            </label><label for="lastname">
              <span>Enter last name :</span>
              <input type="text" v-model="user.lastneme" required  id="lastname"/>
            </label>
            <label for="username">
              <span>Enter user name :</span>
              <input type="text" v-model="user.name" required  id="username"/>
            </label>
            <label for="password">
              <span>Enter password :</span>
              <input type="password" v-model="user.password" required  id="possword" />
            </label>
            <button type="submit">Sign Un</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive} from "vue";
  import { toast } from 'vue3-toastify';
  
  const user = reactive({
    name: "",
    password: "",
  });
  
  const submitForm = ()=>{
      if(user.name.trim() && user.password.trim()){
        toast.success('Login Successful!');
        console.log("user : " + user.name + " password : " + user.password);
        localStorage.setItem('user', JSON.stringify(user)); 
      //   this.$router.push('/');
      }else{
        toast.error('Invalid credentials!');
      }
    
  }
  
  </script>
  
  <style lang="scss" scoped src="./_style.scss"></style>
  