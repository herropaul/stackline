import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const getDataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {setData} = getDataSlice.actions;

export default getDataSlice.reducer;