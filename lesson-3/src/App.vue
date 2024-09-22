<template>
  <div class="container">
    <div class="wrapper">
      <form action="#">
        <input type="text" placeholder="Enter task title" />
        <button type="submit">add task</button>
      </form>
      <ul class="list">
        <li class="list__itim">
          <strong>1</strong>
          <p>Lorem ipsum dolor sit amet.</p>
          <button class="delete">delete</button><button class="done">done</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
