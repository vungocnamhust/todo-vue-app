<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item :label="item.label + ` ` + item.id" :done="item.done" :id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./components/\bToDoItem.vue";
import uniqueId from "lodash.uniqueid";

export default {
  name: "App",
  components: {
    ToDoItem,
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId("todo-"), label: "Learn Vue 3", done: true },
        { id: uniqueId("todo-"), label: "Learn Vue 2", done: false },
        { id: uniqueId("todo-"), label: "Learn Vue DOM", done: false },
        { id: uniqueId("todo-"), label: "Learn Vue CLI", done: true },
        { id: uniqueId("todo-"), label: "Learn Vue", done: true },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
