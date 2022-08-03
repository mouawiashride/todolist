import { createSlice } from "@reduxjs/toolkit";

const initialState = [];



// class NewTodo {

//     constructor
// }

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // add todo
        addtodo: (state, action) => {
            const newtodo = {
                title: String(new Date()),
                content: action.payload.todo,
                statue: 'idle'
            }
            return [...state, newtodo];
        },
        // delete todo
        deletetodo: (state, action) => {
            return state.filter((item,index) => index !== action.payload.index);
        },
        // checked todo
        correctedtodo: (state, action) => {
            state[action.payload.index].statue="success"
        },
        // canceled todo
        canceledtodo: (state, action) => {
            state[action.payload.index].statue="failed"
        },
        // edit todo
        edittodo: (state, action) => {
            state[action.payload.index].content=action.payload.content
        }
    }
});

export const { addtodo, deletetodo, canceledtodo, correctedtodo,edittodo } = todosSlice.actions;


export default todosSlice.reducer;