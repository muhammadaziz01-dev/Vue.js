<template>
  <section>
    <div class="container mx-auto px-2">
      <div
        @submit.prevent="addTask"
        class="flex items-center justify-center rounded-md py-10"
      >
        <form action="#" class="p-4 rounded-md bg-slate-200 shadow-sm">
          <label for="task-title" class="mb-3 block">
            <p class="text-center text-xl mb-2">Task tatle</p>
            <input
              id="task-title"
              v-model="taskTitle"
              class="w-full px-4 py-2 rounded-md"
              type="text"
              placeholder="cretet task title"
            />
          </label>
          <label for="task-date" class="mb-3 block">
            <p class="text-center text-xl mb-2">Task date</p>
            <input
              id="task-date"
              v-model="taskDate"
              class="w-full p-2 rounded-md"
              type="date"
              placeholder="cretet date"
            />
          </label>
          <button type="submit" class="w-full rounded-md p-2 bg-green-600 text-white">
            submit
          </button>
        </form>
      </div>

      <div v-if="!tasks.length">
        <h1 class="text-center text-2xl text-red-500">Not faund tasks</h1>
      </div>

      <ul
        v-else
        class="max-w-[400px] mx-auto flex flex-col p-5 justify-center gap-3 bg-slate-200"
      >
        <li class="w-full p-2 rounded-md bg-white" v-for="(el, index) in tasks">
          <div class="flex items-center justify-between mb-2">
            <h1 class="text-xl">#{{ index + 1 }}</h1>
            <p class= "text-sm text-gray-500" >{{ el.date }}</p>
          </div>
          <p :class="el?.isDone ? `line-through mb-2` : `m-2`">
            {{ el?.title }}
          </p>
          <button @click="deletTask(el?.id)" class="w-1/2 rounded-md p-2 bg-red-600 text-white">Delete</button>
          <button @click="isDoneTask(el?.id)" class="w-1/2 rounded-md p-2 bg-green-500 text-white">Dan</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';

const taskTitle = ref("");
const taskDate = ref("");

const tasks = ref([]);

const addTask = () => {
  if (taskTitle.value.trim() && taskDate.value.trim()) {
    const newTask = {
      id: uuidv4(),
      title: taskTitle.value,
      date: taskDate.value,
      isDone: false,

    }
    tasks.value.push(newTask);
    taskTitle.value = "";
    taskDate.value = "";
  } else {
    alert("Task title and date are required");
  }
};

const deletTask = (id)=>{
    tasks.value = tasks.value.filter((itim)=>itim?.id !=id)
}

const isDoneTask = (id)=>{
    tasks.value.forEach((itim) =>{
      if(itim?.id === id){
        itim.isDone =!itim.isDone;
      }
    })
}
</script>

<style lang="scss" scoped></style>
