import { configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer,  } from "./reducers.tsx";



// store is a collection of reducers 

const store = configureStore({
  reducer: { 
    user : userReducer,
    product: productReducer,

    // blog: blogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;


export default store