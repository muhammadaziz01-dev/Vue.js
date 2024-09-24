<template>
  <div class="container">
    <div class="wrapper">
      <form action="#" @submit.prevent="addNewTask">
        <input v-model="title" type="text" placeholder="Enter task title" />
        <button type="submit">add task</button>
      </form>
      <ul class="list">
        <li class="list__itim" v-for="(el, index) in tasks" v-if="tasks.length">
          <strong>{{ index + 1 }}</strong>
          <p :class="[el?.isDone ? 'isDone' : '']">{{ el?.title }}</p>
          <button class="delete" @click="deleteTask(index)">delete</button>
          <button class="done" @click="toggleTaskStatus(index)">done</button>
        </li>
        <div v-else >
        <h4 class="messege">Create tasks bro ... 😎 </h4>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const title = ref("");
const tasks = ref([]);
const addNewTask = () => {
  if (title.value.trim().length > 0) {
    tasks.value.push({
      id: tasks.value.length + 1,
      title: title.value,
      isDone: false,
    });
    toast.success('Task added successfully!');
    title.value = "";
  }else {
    toast.warning('Task title cannot be empty!');
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
  toast.info('Task deleted successfully!');
};

const toggleTaskStatus = (index) => {
  tasks.value[index].isDone = !tasks.value[index].isDone;
  toast('Task status updated successfully!');
};
</script>

<style lang="scss" scoped>
.isDone {
  text-decoration: line-through;
}

.messege{
  text-align: center;
  margin-top: 20px;
}

.wrapper {
  max-width: 650px;
  min-height: 60vh;
  background-color: #edecec;
  margin: 50px auto;
  padding: 50px;
  border-radius: 20px;
  backdrop-filter: bulr(20px);

  form {
    display: flex;
    gap: 5px;
    input {
      flex-grow: 2;
      padding: 10px;
      border: none;
      border-radius: 12px 0 0 12px;
      outline: none;
      &:hover {
        outline: 1px solid green;
      }
    }

    button {
      padding: 10px 20px;
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      border-radius: 0 12px 12px 0;

      &:hover {
        background-color: #45a049;
      }
      &:focus {
        background-color: #36903b;
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;

    &__itim {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
      width: 100%;
    }

    .delete {
      background-color: rgb(246, 26, 26);
      color: white;
      padding: 5px 10px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background-color: rgb(196, 44, 44);
      }
      &:focus {
        background-color: rgb(163, 5, 5);
      }
    }

    .done {
      background-color: green;
      color: white;
      padding: 5px 10px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background-color: rgb(86, 161, 86);
      }
      &:focus {
        background-color: rgb(2, 90, 2);
      }
    }
  }
}
</style>
