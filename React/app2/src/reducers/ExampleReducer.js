import { createSlice } from "@reduxjs/toolkit";

const val = {
    name: "",
    age:0
}
const example1Reducer = createSlice({
    name: "counter",
    initialState: val,
    reducers: {
        add: (state) => {
            state.age=state.age+5
        },
        sub: (state) => {
            state.age=state.age-1
        }
    }
    
})

export default example1Reducer.reducer
export const{add,sub}=example1Reducer.actions
