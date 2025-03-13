import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [
            {
                id: 1,
                name: 'Estudiar ingles',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur iusto nemo fugit quia alias maiores, voluptate quae, tempore sit distinctio, rerum sed soluta libero.',
                isCompleted: false
            },
            {
                id: 2,
                name: 'Practicar react',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur iusto nemo fugit quia alias maiores, voluptate quae, tempore sit distinctio, rerum sed soluta libero.',
                isCompleted: false
            }
        ]
    },
    reducers: {
        updateTaskStatus: (state, { payload }) => {
            const task = state.tasks.find(task => task.id == payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        }
    }
});

export const { updateTaskStatus } = taskSlice.actions

export default taskSlice.reducer