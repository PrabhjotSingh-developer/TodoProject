import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../Features/Todo/ThemeSlice.js'
import MenuSlice  from "../Features/Todo/MenuSlice.js";
import todoReducer from "../Features/Todo/TodoSlice.js"
import { loadData,saveData } from "../Features/Todo/LocalStorage.js";
import MiniTodoReducer from '../Features/Todo/MiniTodo.js'
const preloadedState = loadData()
const store = configureStore({
    reducer :{
        theme:themeReducer,
        menubar:MenuSlice,
        todos:todoReducer,
        miniBar:MiniTodoReducer
    },
    preloadedState
    
})

store.subscribe(()=>{
    saveData({
        todos:store.getState().todos})
})
export default store;