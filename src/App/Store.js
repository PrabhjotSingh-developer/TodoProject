import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../Features/Todo/ThemeSlice.js'
import MenuSlice  from "../Features/Todo/MenuSlice.js";
import todoReducer from "../Features/Todo/TodoSlice.js"
const store = configureStore({
    reducer :{
        theme:themeReducer,
        menubar:MenuSlice,
        todos:todoReducer
    }
    
})
export default store;