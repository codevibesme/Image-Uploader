import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./state/ImageSlice";


const store = configureStore({
    reducer: imageReducer,
});
export default store;