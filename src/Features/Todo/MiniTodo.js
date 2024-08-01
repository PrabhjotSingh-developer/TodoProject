import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    miniTodo:{
        isOpen:false,
        
    },
}
const MiniTodoSlice = createSlice({
    name:"miniBar",
    initialState,
    reducers:{
        toggleMiniTodo:(state,action)=>{
            console.log(action.payload)
            state.miniTodo = action.payload
            
        }
    }
})
export const {toggleMiniTodo} = MiniTodoSlice.actions
export default MiniTodoSlice.reducer
