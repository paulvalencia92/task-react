// redux
import { useDispatch } from 'react-redux';
import { setTask, updateTaskStatus } from '../store/slices/taskSlice';

// material
import { Checkbox, FormControlLabel, TableCell, TableRow } from '@mui/material'

export const ListItemTask = ({ task }) => {

    const dispatch = useDispatch();


    const handleChange = (e) => {
        e.stopPropagation();
        dispatch(updateTaskStatus(task.id))
    };


    const onClickSetTask = () => {
        dispatch(setTask(task))

    }


    return (
        <TableRow onClick={onClickSetTask} >
            <TableCell>
                <FormControlLabel
                    control={

                        <Checkbox onChange={(e) => handleChange(e)} checked={task.isCompleted} />
                    }
                    label={task.name}

                    sx={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
                />
            </TableCell>
        </TableRow>

    )
}
