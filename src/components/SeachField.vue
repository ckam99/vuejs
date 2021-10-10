<script setup lang="ts">
import { defineEmits } from 'vue'
defineEmits(['change'])
</script>

<template>
    <div class="flex rounded-lg focus-within:border-teal border border-gray-300">
        <input
            type="text"
            class="flex-auto focus:outline-none border-0 p-1 focus:ring-0"
            v-bind="$attrs"
            @change="$emit('change', $event)"
            @input="$emit('change', $event)"
        />
        <div class="flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
    </div>
</template>