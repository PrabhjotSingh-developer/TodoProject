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
        }

    }
})
export const {addTodo,isTodoCompleted,setImportantTasks} = TodoSlice.actions;
export default TodoSlice.reducer