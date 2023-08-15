import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
    name: "message",
    initialState: {
        todos: []
    },
    reducers: {
        setMessage(state, action) {
            state.todos = action.payload
        }
    }
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer
