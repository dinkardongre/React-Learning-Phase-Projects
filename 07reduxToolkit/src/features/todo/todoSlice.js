import { createSlice , nanoid,} from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 1, text : "Example Todo"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action)=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
        },
        updateTodo : (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
        deleteAllTodos : (state) => {
            state.todos = [];
        }
    }
})



export const {addTodo, removeTodo, updateTodo, deleteAllTodos} = todoSlice.actions;

export default todoSlice.reducer;