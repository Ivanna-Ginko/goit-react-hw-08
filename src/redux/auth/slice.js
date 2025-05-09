import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, logOutThunk, refreshThunk, registerThunk } from "./operation";


const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

const slice = createSlice ({
    name: 'auth',
    initialState,
    extraReducers: builder => {
      builder.addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      builder.addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      builder.addCase(logOutThunk.fulfilled, () => initialState
      )
      builder.addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
    }

})

export const authReducer = slice.reducer;