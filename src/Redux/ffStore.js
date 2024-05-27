import { configureStore, createReducer } from "@reduxjs/toolkit";
import productslice from "./slice/productslice";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";

const ffStore=configureStore({
    reducer:{
        productReducer:productslice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})
export default ffStore
