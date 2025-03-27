<script>
import navigationVue from '../pages/navigation.vue';
import CreatePost from './components/CreatePost.vue';
import Home from "./components/Home.vue";
import Post from "./components/Post.vue";
 export default {
   name:"App",
   components:{
     navigation:navigationVue
   }
 }

</script>

<template>
  <div>
    <navigation/>
    <router-view></router-view>
  </div>
</template>


