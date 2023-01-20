import { createSlice } from "@reduxjs/toolkit";

import { loginAction } from "../actions/auth";

const initialState = {
  id: null,
  token: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login : (state,payload)=>{
    //     state.token = payload
    // },
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    // build.addCase(loginAction.pending, (state, { payload }) => {
    //   return {
    //     ...initialState,
    //     isLoading: true,
    //   };
    // });
    // build.addCase(loginAction.fulfilled, (state, { error }) => {
    //   return {
    //     ...initialState,
    //     isLoading: false,
    //     errrMessage: error.message,
    //   };
    // });
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      // console.log(payload)
        // return {
            // ...state,
            // isLoading: false,
            state.id = payload.idUser;
            state.token = payload.token;
          // };
    });
  },
});
export const { /*login ,*/ logout } = authReducer.actions;

export default authReducer.reducer;
