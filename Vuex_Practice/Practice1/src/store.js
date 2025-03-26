import { createStore } from "vuex";
const store= createStore({
    state(){
        return{
            count:1,
            todos:[
              // create todos
                {id:1,text:'Pratham kumar',done:true},
                {id:2,text:'Vivek Pandey',done:false},
                {id:3,text:'Abhishek Sharma',done:true},
                {id:4,text:'Aditya Singh',done:false},

            ],
        }
    },
    mutations:{
     increment(state,playload){
        state.count+=playload;
     }
    },
    actions:{
       increment(context,playload){
         context.commit("increment",playload);
       },
       actionA(context){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
             context.commit("increment",10);
             resolve("Pratham kumar");
           },3000)
        })
       },
       actionB(context){
          context.dispatch("actionA").then((response)=>{
            console.log(response);
            console.log("actionB");
          })
       }
    },
    getters:{
        getTodoById:(state)=>(id)=>{
            return state.todos.find(todo=>todo.id===id);
        },
      doneTodos(state){
        return state.todos.filter((todo)=>todo.done);
      },
      doneTodosListCount(state,getters){
        return getters.doneTodos.length;
      }
    }
})
export default store;