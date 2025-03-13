import { Checkbox, FormControlLabel, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, TableCell, TableRow } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../store/slices/taskSlice';

export const ListItemTask = ({ task }) => {

    const dispatch = useDispatch();


    const handleChange = () => {
        dispatch(updateTaskStatus(task.id))
    };

    return (
        <TableRow >
            <TableCell>
                <FormControlLabel
                    control={
                        <Checkbox onChange={handleChange} checked={task.isCompleted} />
                    }
                    label={task.name}

                    sx={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
                />
            </TableCell>
        </TableRow>

    )
}
