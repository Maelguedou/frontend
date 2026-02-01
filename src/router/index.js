import{createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Menu from '../pages/Menu.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    {path:'/',name:'home',component:Home},
    {path:'/menu',name:'menu', component:Menu},
    {path:'/contact',name:'contact', component:Contact}
]

export const router = createRouter({
    history:createWebHistory(), // définit la manière dont l'URL s'affiche dans la barre d'adresse
    routes
})