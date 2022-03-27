import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import("@/views/index/Index")
const Sorts = () => import("@/views/sorts/Sorts")
const Car = () => import("@/views/car/Car")
const Profile = () => import("@/views/profile/Profile")

const routes = [
    {
        path: "",
        redirect: "/index"
    },
    {
        path: "/index",
        component: Index
    },
    {
        path: "/sorts",
        component: Sorts
    },
    {
        path: "/car",
        component: Car
    },
    {
        path: "/profile",
        component: Profile
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router