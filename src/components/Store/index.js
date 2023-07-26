import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "./counter";
import authReducer from "./auth";

/** Configure store one by one using one main unique reducers */
const store = configureStore({
    reducer: {
        counter:counterReducer,
        auth:authReducer
    }
});
export default store