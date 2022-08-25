import { createRouter, createWebHistory } from 'vue-router'
import  LandingWelcome from '../pages/Welcome'
import  LoginPage from '../pages/auth/Login'
import  RegisterPage from '../pages/auth/Register'
import  DashboardAgentPage from '../pages/DashboardAgent'
import  DashboardStaffPage from '../pages/DashboardStaff'
import  ResultPage from '../pages/Result'
import  CenterResultPage from '../pages/CenterResult'



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
        path: '/dashboardAgent',
        name: 'DashboardAgentPage',
        component: DashboardAgentPage
    },
    {
        path: '/dashboardStaff',
        name: 'DashboardStaffPage',
        component: DashboardStaffPage
    },
    {
        path: '/result',
        name: 'ResultPage',
        component: ResultPage
    },
    {
        path: '/center-result',
        name: 'CenterResultPage',
        component: CenterResultPage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router