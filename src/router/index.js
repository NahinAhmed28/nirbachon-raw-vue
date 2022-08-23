import { createRouter, createWebHistory } from 'vue-router'
import  LandingWelcome from '../pages/Welcome'
import  LoginPage from '../pages/auth/Login'
import  RegisterPage from '../pages/auth/Register'

const routes = [
    {
        path: '/',
        name: 'LandingWelcome',
        component: LandingWelcome
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router