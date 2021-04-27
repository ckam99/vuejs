// import axios from 'axios'
import { ref, Ref } from 'vue'


export type ApiRequest = () => Promise<void>

export default function useApi<T>(url: RequestInfo, options?: RequestInit) {
    // const instance = axios.create({
    //     baseURL: 'https://jsonplaceholder.typicode.com',
    //     timeout: 1000
    // })

    const response: Ref<T | undefined> = ref()

    const request: ApiRequest = async () => {
        const res = await fetch(url, options)
        const data = await res.json()
        response.value = data
    }

    return { response, request }
}