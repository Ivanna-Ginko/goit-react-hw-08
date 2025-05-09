import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filters/slice'
import contactReducer from  "./contacts/slice"
import { authReducer } from "./auth/slice";




export const store = configureStore({
  reducer:{
    contacts : contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  
})




