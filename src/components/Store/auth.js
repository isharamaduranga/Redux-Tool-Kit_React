import {createSlice} from "@reduxjs/toolkit";

/** Define Authentication slice reducers */
const initialAuthState = {isAuthenticated: false}; //Initials Values

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

/** Return specific Reducer in authSlice */
export default authSlice.reducer;

/** Return Actions one by One related places ...*/
export const authActions = authSlice.actions;