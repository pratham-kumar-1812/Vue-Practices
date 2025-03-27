import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Post from './components/Post.vue'
import CreatePost from './components/CreatePost.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PostDetails from './components/PostDetails.vue'
import NotFound from './components/NotFound.vue'
const routes=[
    {
        path:'/',
        component:Home,
        redirect:'/post'
    },
    {
        path:'/post',
        component:Post,
        children:[
            {
                path:":id",
                component:PostDetails,
            },
        ]
    },
   
    {
        path:'/createpost',
        component:CreatePost
    },
    {
        path:"/:NotFound(.*)*",component:NotFound,
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes:routes,
    linkActiveClass:"active",

})
createApp(App).use(router).mount('#app')
