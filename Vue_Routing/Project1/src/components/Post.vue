<template>
  <div class="card">
    <div>
      <h3>Post Deatils</h3>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Title</th>
          <th>body</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in postDetails" :key="post.id">
          <td>
            {{ post.id }}
          </td>
          <td>
            {{ post.userId }}
          </td>
          <td>
            {{ post.title }}
          </td>
          <td>
            {{ post.body }}
          </td>
          <td>
            <router-link :to="`/post/${post.id}`">
              show full detatil
            </router-link>
          </td>

        </tr>
      </tbody>
    </table>
    </div>
    <div :style="{
      backgroundColor:'gray'
    }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
   name:"Posts",
   data(){
    return{
      postDetails:[]
    }
   },
   async mounted(){
     try {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const data=await response.json();
      this.postDetails=data;
     

     } catch (error) {
      console.error(error);
     }
   }
}
</script>

<style>

.card{
  display: flex;
  flex-direction: row;
  align-content: space-between;
}


</style>