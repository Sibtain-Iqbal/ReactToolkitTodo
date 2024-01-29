
import { createSlice, nanoid } from '@reduxjs/toolkit'

export const initialState = {

    todos: [
        {
            todoMsg: " heelo todo",
            id: 1,
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                todoMsg: action.payload,
                id: nanoid()

            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )

         },
         updateTodo:(state , action)=>{
            state.todos = state.todos.map((todo)=> todo.id === todo  )
         }
    }
})
export const {addTodo , removeTodo} = todoSlice.actions
