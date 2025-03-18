// redux
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask, toggleShowFormSave, updateSelectedTaskStatus, updateTaskStatus } from '../store/slices/taskSlice';

// material
import { Checkbox, FormControlLabel, TableCell, TableRow } from '@mui/material'

export const ListItemTask = ({ taskItem }) => {

    const dispatch = useDispatch();
    const { selectedTask } = useSelector(state => state.task);


    const onClickSetTask = () => {  
        dispatch(toggleShowFormSave(false));
        dispatch(setSelectedTask(selectedTask?.id === taskItem.id ? null : taskItem));
    }


    const changeStatus = (event) => {
        event.stopPropagation();
        dispatch(updateTaskStatus(taskItem?.id))
        dispatch(updateSelectedTaskStatus(taskItem?.id))

    };



    return (
        <TableRow sx={{ background: selectedTask?.id === taskItem.id ? '#e7e7f8' : '', cursor: 'pointer' }}>
            <TableCell onClick={onClickSetTask}>
                <FormControlLabel

                    control={
                        <Checkbox onClick={changeStatus} checked={taskItem.isCompleted} />
                    }
                    label={taskItem.name}
                    onClick={(e) => e.stopPropagation()} 
                    sx={{
                        textDecoration: taskItem.isCompleted ? "line-through" : "none",
                        transition: "color 0.2s",
                        "&:hover": {
                            color: "warning.dark"
                        },
                    }}
                />
            </TableCell>
        </TableRow>

    )
}
