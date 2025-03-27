<template>
  <div class="nav-bar">
    <ul>
        <li>
            <router-link to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link to="/post">
                Post
            </router-link>
        </li>
        <li>
            <router-link to="/createpost">
                CreatPost
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

ul{
    display: flex;
    flex-direction: row;
    gap: 4px;
    list-style: none;
}
.active{
    background-color: white;
    font-weight: 500;
    border-radius: 10px;
    padding: 3px;
    
}
.nav-bar{
    background-color:gray;
    padding: 10px;
    border: 2px solid white;
}

</style> 