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
        selectedTask: null,
        showFormSave: false
    },
    reducers: {
        updateTaskStatus: (state, { payload }) => {
            const task = state.tasks.find(task => task.id == payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        setTask: (state, { payload }) => {
            state.selectedTask = payload
        },
        toggleShowFormSave: (state, { payload }) => {
            state.showFormSave = payload;
        },
        addTask: (state, { payload }) => {
            state.tasks.push(payload)
        }
    }
});

export const { updateTaskStatus, setTask, toggleShowFormSave, addTask } = taskSlice.actions

export default taskSlice.reducer