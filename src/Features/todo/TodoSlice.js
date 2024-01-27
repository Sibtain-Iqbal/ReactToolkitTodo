
import { createSlice, nanoid } from '@reduxjs/toolkit'

export const initialState = {

    todos: [
        {
            todoMsg : " heelo todo",
            id: 1,
        }
    ]
}

export const  todoSlice  = createSlice({
    name : nanoid(),
    initialState,
    r
})