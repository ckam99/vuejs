<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div v-if="error">{{ error }}</div>
    <ul>
      <Suspense>
        <template #default>
          <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useTodos from "@/composables/todos";

export default defineComponent({
  name: "Home",
  async setup() {
    const error = ref(null);
    // onErrorCaptured(e => {
    //   error.value = e
    //   return true
    // })}
    const { todos } = await useTodos();

    console.log(todos.value);

    return { todos, error };
  },
});
</script>
