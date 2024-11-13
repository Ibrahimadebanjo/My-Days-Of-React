// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: "user",
//     initialState: {value: {name: "", age:0, email: ""}},
//     reducers : {
//         Login: (state, action) => {
//             state.value = action.payload;
//         },
//     }
// })
// export const{login} = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue =  { name: "", age: 0, email: "" }
const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {  // Change 'Login' to 'login'
            state.value = action.payload;
        },
        // set the state to initial state before updating it
        logout: (state) => {
state.value = initialStateValue
        }
    },
});

export const { login, logout} = userSlice.actions;
export default userSlice.reducer;
