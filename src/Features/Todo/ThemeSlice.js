import { createSlice } from "@reduxjs/toolkit"
const themeSlice = createSlice({
    name:"theme",
    initialState:{theme:"light"},
    reducers:{
       themeChanger:(state)=>
       { 
           const body = document.querySelector('body')
           if( state.theme === 'light')
           {
               body.style.backgroundColor = "#242424"
               body.style.color = "white"
           }    
           else
           {
               body.style.backgroundColor = "#FBFDFC"
               body.style.color = "#1B281B"
           } 
              
          return {
           ...state,
           theme:state.theme === 'light' ? 'dark' : 'light'
          }   
       }
    }

})
export const {themeChanger} = themeSlice.actions;
export default themeSlice.reducer
