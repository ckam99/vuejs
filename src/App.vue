
<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
import SeachField from "./components/SeachField.vue";

function handleChange(e: { target: HTMLInputElement }) {
  console.log(e.target.value);
}

</script>

<template >
  <SeachField name="saa" @change="handleChange" />
  <HelloWorld />
</template>


<style>
@import url("./assets/tailwind.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
