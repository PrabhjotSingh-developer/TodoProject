import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     allTask:[],
    //  Important:[],
    //  Today:[],
}
const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            
            state.allTask.push(action.payload);
            
        }

    }
})
export const {addTodo} = TodoSlice.actions;
export default TodoSlice.reducer