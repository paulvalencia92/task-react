import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [
            {
                id: 1,
                name: 'Estudiar ingles',
                description: '',
                isCompleted: false
            },
            {
                id: 1,
                name: 'Practicar react',
                description: '',
                isCompleted: false
            }
        ]
    },
    reducers: {
        getTasks: (state) => {
            return state.tasks;
        }
    }
});

export const { getTasks } = taskSlice.actions

export default taskSlice.reducer