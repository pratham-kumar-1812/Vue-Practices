<template>
  <div>
    post Detail - {{ id  }}
    <router-link to="/post/4">
        Go to id - {4};
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
        post:'',
        id:'',
    }
  },
  watch:{
    $route(){
        this.id=this.$route.params.id;
    }
  },
  created(){
   this.id=this.$route.params.id;
  }

}
</script>

<style>

</style>