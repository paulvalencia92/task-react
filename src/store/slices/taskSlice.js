import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [
            {
                id: crypto.randomUUID(),
                name: 'Estudiar ingles',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur iusto nemo fugit quia alias maiores, voluptate quae, tempore sit distinctio, rerum sed soluta libero.',
                isCompleted: false
            },
            {
                id: crypto.randomUUID(),
                name: 'Practicar react',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur iusto nemo fugit quia alias maiores, voluptate quae, tempore sit distinctio, rerum sed soluta libero.',
                isCompleted: false
            }
        ],
        taskSelect: {}
    },
    reducers: {
        updateTaskStatus: (state, { payload }) => {
            const task = state.tasks.find(task => task.id == payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        setTask: (state, { payload }) => {
            state.taskSelect = payload
        }
    }
});

export const { updateTaskStatus, setTask } = taskSlice.actions

export default taskSlice.reducer