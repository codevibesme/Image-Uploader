import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    picturePath: '',
};

export const imageSlice  = createSlice({
    name: 'image',
    initialState,
    reducers: {
        updatePicturePath: (state, action) => {
            state.picturePath = action.payload.picturePath;
        },
    },
});
export const { updatePicturePath } = imageSlice.actions;
export default imageSlice.reducer;