import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },

        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const taskToUpdate = state.find((task) => task.id == id);
            if (taskToUpdate) {
                taskToUpdate.title = title;
                taskToUpdate.description = description;
            }
        },
    },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;