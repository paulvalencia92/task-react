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
        showFormSave: false,
        taskForm: {
            id: null,
            name: '',
            description: '',
            isCompleted: false
        },
        notification:  {
            show: false,
            message: '',
            severity: ''
        }
    },
    reducers: {
        updateTaskStatus: (state, { payload }) => {
            const task = state.tasks.find(task => task.id == payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        setSelectedTask: (state, { payload }) => {
            state.selectedTask = payload
        },
        toggleShowFormSave: (state, { payload }) => {
            state.showFormSave = payload;
        },
        addTask: (state, { payload }) => {
            state.tasks.push(payload)
        },
        updateSelectedTaskStatus: (state, { payload }) => {
            if (state.selectedTask && state.selectedTask.id === payload) {
                state.selectedTask.isCompleted = !state.selectedTask.isCompleted;
            }
        },
        setTaskForm: (state, { payload }) => {
            state.taskForm = payload;
        },
        updateTask: (state, { payload }) => {
            const index = state.tasks.findIndex(task => task.id === payload.id);
            state.tasks.splice(index, 1, payload)
        }


    }
});

export const { updateTaskStatus, setSelectedTask, toggleShowFormSave, addTask, updateSelectedTaskStatus, setTaskForm, updateTask } = taskSlice.actions

export default taskSlice.reducer