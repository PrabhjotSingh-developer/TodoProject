import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     allTask:[],
}
const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.allTask.push(action.payload);
          
        },
        isTodoCompleted:(state,action)=>{
            const todo = state.allTask.find(todo => todo.id == action.payload);
            if(todo)
            {
                 todo.completed = !todo.completed
            }
           
        },
        setImportantTasks:(state,action)=>{
             const todo = state.allTask.find(todo=>todo.id == action.payload)
             if(todo)
             {
                todo.important = !todo.important
             }
        },
        deleteTodo:(state,action)=>{
            state.allTask = state.allTask.filter((item)=>item.id !==action.payload)
        },
        editTodo:(state,action)=>{
            console.log(action.payload);
            const item = state.allTask.find(todo =>todo.id === action.payload.id)
            if(item)
                  item.content = action.payload.content
        }

    }
})
export const {addTodo,isTodoCompleted,setImportantTasks,deleteTodo,editTodo} = TodoSlice.actions;
export default TodoSlice.reducer