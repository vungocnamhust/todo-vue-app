<template>
  <div>
    <input type="checkbox" v-bind:id="id" v-bind:checked="isDone" />
    <label :for="id">{{ label }} </label>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: {
    label: { require: true, type: String },
    done: { default: false, type: Boolean },
    id: { require: true, type: String },
    author: { require: false, default: "", type: String },
  },
  data() {
    console.log(this.done);
    return {
      isDone: this.done,
    };
  },
};
</script>
