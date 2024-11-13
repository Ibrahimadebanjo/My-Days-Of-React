import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";
const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
       changeColor: (state, action) => {  // Change 'Login' to 'login'
            state.value = action.payload;
        },
        // set the state to initial state before updating it
    },
});

export const {changeColor } = themeSlice.actions;
export default themeSlice.reducer;
