<template>
  <div>
    <div>
      Home Page
    </div>
    <div>
      <button @click.prevent="onPostClick">Click to Post Page</button>
    </div>
    
  </div>
</template>

<script>
export default {
  methods:{
    onPostClick(){
      this.$router.push('/post');
    }
  }
}
</script>

<style>

</style>