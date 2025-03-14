// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTask, toggleShowFormSave, updateTaskStatus } from '../store/slices/taskSlice';

// material
import { Checkbox, FormControlLabel, TableCell, TableRow } from '@mui/material'

export const ListItemTask = ({taskItem }) => {

    const dispatch = useDispatch();
    const { selectedTask } = useSelector(state => state.task);


    const onClickSetTask = () => {
        dispatch(toggleShowFormSave(false));
        dispatch(setTask(selectedTask?.id === taskItem.id ? null : taskItem));
    }


    const changeStatus = (event) => {
        event.stopPropagation();
        dispatch(updateTaskStatus(taskItem.id))
    };



    return (
        <TableRow sx={{ background: selectedTask?.id === taskItem.id ? '#e7e7f8' : '', cursor: 'pointer' }}>
            <TableCell onClick={onClickSetTask}>
                <FormControlLabel
                    control={
                        <Checkbox onClick={changeStatus} checked={taskItem.isCompleted} />
                    }
                    label={taskItem.name}
                    sx={{ textDecoration: taskItem.isCompleted ? "line-through" : "none" }}
                />
            </TableCell>
        </TableRow>

    )
}
