import { createRouter, createWebHistory } from 'vue-router'
import  LandingWelcome from '../pages/Welcome'
import  LoginPage from '../pages/auth/Login'
import  RegisterPage from '../pages/auth/Register'
import  DashboardAgentPage from '../pages/DashboardAgent'
import  DashboardStaffPage from '../pages/DashboardStaff'
import  ResultPage from '../pages/Result'
import  CenterResultPage from '../pages/CenterResult'
import  Zillapage from '../pages/maps/ZillaPage'
import  DivisionPage from '../pages/maps/DivisionPage'



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
        path: '/dashboard-agent',
        name: 'DashboardAgentPage',
        component: DashboardAgentPage
    },
    {
        path: '/dashboard-staff',
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
    },
    {
        path: '/zillapage',
        name: 'Zillapage',
        component: Zillapage
    },
    {
        path: '/divisionpage',
        name: 'Divisionpage',
        component: DivisionPage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router