import { ref } from 'vue'
import useApi from './api'

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default async function useTodos() {
    const { response: todos, request } = useApi<Todo[]>('https://jsonplaceholder.typicode.com/todos')

    const loaded = ref(false)

    if (loaded.value === false) {
        await request()
        loaded.value = true
    }
    return { todos }
}