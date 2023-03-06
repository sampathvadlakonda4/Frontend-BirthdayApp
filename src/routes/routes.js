import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import LoginPage from "../components/LoginPage.vue"
import HomePage from "../components/home/HomePage.vue"
import BirthDayLists from "../components/home/homeSubComps/birthdayLists.vue"
import AddBirthday from "../components/home/homeSubComps/addBirthday.vue"

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
        children:[
            {
                path: '/home/birthdaylists',
                component: BirthDayLists,
                beforeEnter: guardRoute,
            },
            {
                path: '/home/addbirthday',
                component: AddBirthday,
                beforeEnter: guardRoute,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router