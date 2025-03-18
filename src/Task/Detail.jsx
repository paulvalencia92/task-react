// redux
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, setSelectedTask, setTaskForm, toggleShowFormSave, updateSelectedTaskStatus, updateTaskStatus } from "../store/slices/taskSlice";

// material ui
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Done from '@mui/icons-material/Done';
import ConfirmDialog from '../shared/ConfirmDialog';
import { useState } from 'react';
import { hideNotification, showNotification } from '../store/slices/notificationSlice';

//components



export const Detail = () => {


    const [open, setOpen] = useState(false);

    // redux
    const { selectedTask } = useSelector(state => state.task);
    const dispatch = useDispatch();


    // methods

    const handleChangeStatus = () => {
        dispatch(updateTaskStatus(selectedTask.id))
        dispatch(updateSelectedTaskStatus(selectedTask.id))
    }

    const handleEditTask = () => {
        dispatch(setTaskForm(selectedTask));
        dispatch(toggleShowFormSave(true));
    }

    const handleDelete = () => {
        dispatch(deleteTask(selectedTask.id))
        dispatch(toggleShowFormSave(false));
        dispatch(setSelectedTask(null));

        // show and closed notifiaction
        dispatch(showNotification({ message: 'Tarea eliminada correctamente', servery: 'success' }))
        setTimeout(() => dispatch(hideNotification()), 1000);

        setOpen(false);
    }

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}
                            sx={{ backgroundColor: 'primary.main', fontWeight: "bold", textAlign: "center", color: 'white' }}>
                            {selectedTask.name}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2}>

                            {selectedTask.description}

                            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 5, ml: 1 }}>

                                <Button
                                    onClick={handleChangeStatus}
                                    startIcon={<Done />}
                                    color="primary"
                                    variant="contained">
                                    {selectedTask.isCompleted ? 'Completado' : 'Completar'}
                                </Button>

                                <Button
                                    onClick={handleEditTask}
                                    startIcon={<Edit />}
                                    color="secondary"
                                    variant="contained">
                                    Editar
                                </Button>

                                <Button
                                    onClick={() => setOpen(true)}
                                    startIcon={<DeleteIcon />}
                                    color="error"
                                    variant="contained">
                                    Eliminar
                                </Button>

                            </Box>


                        </TableCell>


                    </TableRow>

                </TableBody>
            </Table>

            {/* Confirmar eliminar */}
            <ConfirmDialog
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={handleDelete}
            />

        </>
    )
}
