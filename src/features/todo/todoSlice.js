import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: "", text: "" ,ln:""}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log("action-payload :::",action.payload)
            const todo = {
                id: nanoid(), 
                text: action.payload.text,
                ln:action.payload.ln
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        updateTodo: (state, action) => {
            
            const { id, text,ln } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.text = text;
              todoToUpdate.ln = ln;
            }
          },
          
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer