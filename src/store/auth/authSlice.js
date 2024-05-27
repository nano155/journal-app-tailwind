import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "checking",
        uuid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {     
            (state.status = "autenticated");
            (state.uuid = action.payload.uid);
            (state.email = action.payload.email);
            (state.displayName = action.payload.displayName);
            (state.photoURL = action.payload.photoURL);
            (state.errorMessage = null);
        },
        logout: (state, {payload}) => {
            (state.status = "not-autenticated");
            (state.uuid = null);
            (state.email = null);
            (state.displayName = null);
            (state.photoURL = null);
            (state.errorMessage = payload);
        },
        checkingCredentials: (state) => {
            state.status = "checking";
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
