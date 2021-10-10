<script  setup lang="ts">
import { ref } from "vue";
import Icon from './Icon.vue'


interface User {
  id: number;
  name: string;
  email: string;
}

const msg = ref<string>("Hello World!");
const user = ref<User>();
</script>

<template>
  <Icon name="bell" style="color: blueviolet;" />
  <h1 class="text-green-600 bg-bla">{{ msg }}</h1>
  <h1>{{ user?.email }}</h1>
  <input v-model="msg" type="text" />
  <div class="flex">
    <div class="flex items-center">
      <input type="radio" name="c" id="c1" />
      <label for="c1" class="ml-1">Mr.</label>
    </div>
    <div class="flex items-center">
      <input type="radio" name="c" id="c2" />
      <label for="c2" class="ml-1">Mme.</label>
    </div>
  </div>
</template>
