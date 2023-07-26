import {createSlice} from "@reduxjs/toolkit";

/** Define Counter slice reducers */
const initialCounterState = {counter: 0, showCounter: true}; //Initials Values

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter=state.counter+action.payload;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
});

/** Return specific Reducer in CounterSlice */
export default counterSlice.reducer;
/** Return Actions one by One related places ...*/
export const counterActions = counterSlice.actions;
