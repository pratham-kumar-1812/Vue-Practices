<script>
  export default {
    name:"App",
    data(){
      return{
        num:1
        
      }
    },
    methods:{
      Increase(){
        this.fontsize++;
      },
      decrease(){
        this.fontsize--;
      }
    }

  }
</script>

<template>
  <h2 v-if="num===0">The number is Zero</h2>
  <h2 v-else>The number is not Zero</h2>
</template>


