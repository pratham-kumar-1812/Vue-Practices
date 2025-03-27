<template>
  <div>
    <h3>Create Post Page</h3>
    <form @submit.prevent="onCreatePost">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="title">
      </div>
      <div>
        <label for="Body">Body</label>
        <input type="text" id="body" name="body" v-model="body">
      </div>
      <div>
        <label for="userId">userId</label>
        <input type="text" id="userId" name="userId" v-model="userId">
      </div>
      <div>
        <label for="id">id</label>
        <input type="text" id="id" name="id" v-model="id">
      </div>
      <div>
        <button type="submit">sumbit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
 name:"createPost",
 data(){
  return{
   
      id:"",
      title:"",
      body:"",
      userId:"",
    
  }
 },
 methods:{
   onCreatePost(){

    fetch("http://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id:this.id,userId:this.userId,body:this.body,title:this.title }),
  // ...
     }).then((response)=>{
        console.log(response);
        this.$router.push("/post");
     });

   }
 }
}
</script>

<style>

</style>