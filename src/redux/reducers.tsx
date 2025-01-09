import { createReducer } from "@reduxjs/toolkit";

interface stateTypes {

  loading : boolean,
  message : string,
  payload : any
}


const userIntialState : stateTypes= { 
  loading: false,
  message: "",
  payload: {},
};

export const userReducer = createReducer(userIntialState, (builder : any): void => {
  builder
    .addCase("APIREQUEST", (state : stateTypes) => {
      state.loading = true;
    })
    .addCase("APISUCCESS" ,(state : stateTypes , action : stateTypes)=>{
      state.loading = false
      state.message = action.message
      state.payload = action.payload;
    })
    .addCase("APIFAILURE", (state :stateTypes) => {
      state.loading = false;
      state.message = "Server Error | 404"
    })

  
});


const productIntialState : stateTypes = {
  loading: false,
  message: "",
  payload: [],
};

export const productReducer = createReducer(productIntialState, (builder : any) : void => {
  builder
    .addCase("ProductDataRequest", (state : stateTypes) => {
      state.loading = true;
    })
    .addCase("ProductDataSuccess", (state : stateTypes, action : stateTypes) => {
      state.loading = false;
      state.message = action.message;
      state.payload = action.payload;
    })
    .addCase("ProductDataError", (state : stateTypes, action : stateTypes) => {
      state.loading = true;
      state.message = action.message;
    });
});

// export const blogReducer = createReducer();
