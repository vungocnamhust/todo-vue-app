<template>
  <form @submit.prevent="onSubmit">
    <label> What need to be done? </label>
    <input
      type="text"
      id="todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "ToDoForm",
  methods: {
    onSubmit() {
      console.log("Submitted: " + this.label);
      this.$emit("todo-added");
    },
  },
  data() {
    return {
      label: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
