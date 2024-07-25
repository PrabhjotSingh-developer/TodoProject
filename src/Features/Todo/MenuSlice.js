import { createSlice } from "@reduxjs/toolkit";
const MenuSlice = createSlice({
    name:"menubar",
    initialState:{mobileBar:false,desktopBar:true},
    reducers:{
        mobileToggle:(state)=>{
            
         return {
            ...state,
            mobileBar:state.mobileBar == false ? true : false
         }
        } ,
   
    
}
})

export const {mobileToggle} = MenuSlice.actions;
export default MenuSlice.reducer