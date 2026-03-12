import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/Stores/auth'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // Hvis du bruker cookies i stedet: withCredentials: true
})

api.interceptors.request.use((config) => {
    const auth = useAuthStore()
    if (auth.token) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${auth.token}`
    }
    return config
})

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const status = error?.response?.status
        if (status === 401) {
            const auth = useAuthStore()
            auth.logout()

            // Unngå loop hvis du allerede er på login
            if (router.currentRoute.value.name !== 'login') {
                await router.push({
                    name: 'login',
                    query: { redirect: router.currentRoute.value.fullPath }
                })
            }
        }
        return Promise.reject(error)
    }
)
