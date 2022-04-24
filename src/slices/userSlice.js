import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        Email: "bobby@jones.com",
        Image: "https://pbs.twimg.com/profile_images/1434576204825337856/qzRHfiUm_400x400.jpg",
        Password: "bob is my friend"
    },
    {
        Email: "bob@jones.com",
        Image: "https://s.yimg.com/uu/api/res/1.2/YZm09rmYAom4ZvicvpF0jg--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/a4c6ddbc1e371f64ded891dab1ca8a2b",
        Password: "bobby is my friend"
    }
];


export const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer