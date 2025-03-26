<template>
  <div>
    <h2>Todos List (done: {{ doneListCount }})</h2>
  <ul>
    <li v-for="todo in todosList" :key="todo.id">
      <a href="#" @click.prevent="onTodoSelected(todo.id)">
        {{ todo.text }}
    </a>
    </li>
  </ul>
  <h3>Completed Todos</h3>
  <ul>
    <li v-for="todo in done" :key="todo.id">
        {{ todo.text }}
    </li>
  </ul>
  <h3>Selected Todo</h3>
   <div v-if="todo">
    <div> Id : {{ todo.id }}</div>
    <div> Text : {{ todo.text }}</div>
    <div> Done : {{ todo.done }};
    </div>
   </div>
  <div>

  </div>
  </div>
</template>

<script>
export default {
   data(){
    return{
      selectedId:0,
    }
   },
   computed:{
    todosList(){
        return this.$store.state.todos;
    },
    doneListCount(){
        return this.$store.getters.doneTodosListCount;
    },
    done(){
        return this.$store.getters.doneTodos
    },
    todo(){
        return this.$store.getters.getTodoById(this.selectedId);
    }}
    ,
    methods:{
        onTodoSelected(id){
          this.selectedId=id;
        }
    }
   }

</script>

<style>

</style>