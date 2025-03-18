import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/taskSlice'
import notificationSlice from './slices/notificationSlice'

export const store = configureStore({
  reducer: {
    task: taskSlice,
    notification: notificationSlice,
  },
})