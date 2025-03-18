import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
    message: '',
    severity: 'info', // 'success', 'error', 'warning', 'info'
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification: (state, action) => {
            state.show = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        hideNotification: (state) => {
            state.show = false;
            state.message = '';
        }
    }
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
