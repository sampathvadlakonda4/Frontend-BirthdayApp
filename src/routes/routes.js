import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import LoginPage from "../components/LoginPage.vue"
import HomePage from "../components/home/HomePage.vue"

 const guardRoute = (to,from,next)=>{
    if(localStorage.getItem("loggedIn")){
        next()
    }
    else{
        next('/')
    }
}
const routes = [
    {
        path: "/",
        name: "loginpage",
        component: LoginPage,
    },
    {
        path: "/home",
        name: "home",
        component: HomePage,
        beforeEnter: guardRoute,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router