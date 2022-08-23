import { createRouter, createWebHistory } from 'vue-router'
import  LandingWelcome from '../pages/Welcome'
import  LoginPage from '../pages/auth/Login'
import  RegisterPage from '../pages/auth/Register'
import  HomePage from '../pages/Home'
import  DashboardPage from '../pages/Dashboard'


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
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: DashboardPage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router