<script>
import Counter from "./components/Counter.vue"
import Todoslist from "./components/Todoslist.vue";
export default{
  name:'App',
  components:{
     Counter,
     Todoslist,
  },
  methods:{
    onIncrement(){
      this.$store.commit("increment",4);
    }
  }
}
 

</script>

<template>
 <div>
  <div>
    <counter/>
  </div>
  <div>
    <button @click.prevent="onIncrement">Increment</button>
  </div>
   <div>
    <todoslist/>
   </div>

 </div>
 
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
