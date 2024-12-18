<template>
    <div>
      <h1>Vue.js "REF"</h1>
      <h3>
        count : <span class="count"> {{ count }}</span>
      </h3>
      <div class="btn-parent">
        <button @click="increment">Increment +</button>
        <button @click="decrement">Decrement -</button>
      </div>
    </div>
    <div>
      <h1>Vue.js "REACTIV"</h1>
      <h3>Reactiv test  User</h3>
      <ul>
        <li v-for="el in user" key="el" class="list--itim">
          <span>
            {{
              el === user?.age
                ? "User age: "
                : el === user.name
                ? "User name: "
                : el === user?.email
                ? "User email: "
                : ""
            }}
          </span>
          {{ el }}
        </li>
      </ul>
      <!-- User age updet btns -->
      <div class="btn-parent">
        <button @click="userAgeIncrement">Increment Age +</button>
        <button @click="userAgeDecrement">Decrement Age -</button>
      </div>
      <!-- User name updet form -->
      <form @submit.prevent="updateUserName" class="form">
      <h3>Form from updet user name</h3>
      <input v-model="newName" type="text" class="form--input" placeholder="New name" />
      <button type="submit"> Submit</button>
      </form>
  <!--     
      <input type="text" v-model="user.name" />
      <button @click="updateUser">Update Name</button> -->
    </div>
    <!-- <TestComponent/> -->
  </template>
  
  <script setup>
  // import TestComponent from "./components/test.vue";
  import { ref, reactive } from "vue";
  
  const count = ref(0);
  
  const increment = () => {
    count.value++;
  };
  
  const decrement = () => {
    count.value--;
  };
  
  // reactive test
  
  const user = reactive({
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  });
  
  const newName = ref("")
  
  const userAgeIncrement = () => {
    user.age++;
  };
  const userAgeDecrement = () => {
    user.age--;
  };
  
  const updateUserName = () => {
    if(newName.value.trim()){
      user.name = newName.value;
      newName.value = "";  // clear the input field after updating name.
    }
    // Update user name
  };
  </script>
  
  <style scoped>
  .btn-parent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .count {
    color: greenyellow;
  }
  
  .list--itim {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 5px 0;
    border: 1px solid;
    border-radius: 5px;
  
  }
  
  .form--input{
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  </style>
  