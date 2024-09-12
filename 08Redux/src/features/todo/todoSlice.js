import { createSlice, nanoid } from "@reduxjs/toolkit";         // nanoid is a function that generates a unique id

const initialState = {
    todos: [{id : 1, text : 'todo1'}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload       // parameter passed to addTodo action   
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
