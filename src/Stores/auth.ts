import { defineStore } from 'pinia'
import { api } from '@/lib/api'
import type {Role} from "@/Types/roles.ts";

type UserDto = {
    id: string
    email: string
    roles: Role[]
}

type LoginResponse = {
    token: string
    user: UserDto
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') as string | null,
        user: null as UserDto | null,
        initialized: false
    }),

    getters: {
        isLoggedIn: (s) => !!s.token,
        roles: (s) => s.user?.roles ?? [],
        hasRole: (s) => (role: Role) => (s.user?.roles ?? []).includes(role),
        hasAnyRole: (s) => (roles: Role[]) => roles.some(r => (s.user?.roles ?? []).includes(r))
    },

    actions: {
        async init() {
            if (this.initialized) return
            this.initialized = true

            // Hvis vi har token, verifiser ved å hente /auth/me
            if (this.token) {
                try {
                    await this.me()
                } catch {
                    // me() vil feile om token er utgått/ugyldig
                    this.logout()
                }
            }
        },

        async login(email: string, password: string) {
            // Tilpass endpoint-navn til din API
            const { data } = await api.post<LoginResponse>('/auth/login', { email, password })

            this.token = data.token
            this.user = data.user
            localStorage.setItem('token', data.token)
        },

        async me() {
            const { data } = await api.get<UserDto>('/auth/me')
            this.user = data
            return data
        },

        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        }
    }
})
