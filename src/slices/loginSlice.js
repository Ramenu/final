import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
    token: "",
    status: ""
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        confirmLogin: (state, action) => {
            if (action.payload.status === "Logged in") {
                state.email = action.payload.email;
                state.password = action.payload.password;
                state.token = "Active";
                state.status = action.payload.status;
            } else {
                state.token = "";
            }
            return state;
        }
    }
})

export const { confirmLogin } = loginSlice.actions;

export default loginSlice.reducer