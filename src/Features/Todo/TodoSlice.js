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
           
        }

    }
})
export const {addTodo,isTodoCompleted} = TodoSlice.actions;
export default TodoSlice.reducer