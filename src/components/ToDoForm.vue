<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label> What need to be done? </label>
    </h2>
    <input
      type="text"
      id="todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
      class="input__lg"
    />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>

<script>
export default {
  name: "ToDoForm",
  methods: {
    onSubmit() {
      console.log("Submitted: " + this.label);
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
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
