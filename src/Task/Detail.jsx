// redux
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedTaskStatus, updateTaskStatus } from "../store/slices/taskSlice";

// material ui
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Done from '@mui/icons-material/Done';


export const Detail = () => {

    const { selectedTask } = useSelector(state => state.task);
    const dispatch = useDispatch();

    const onClickChangeStatus = () => {
        dispatch(updateTaskStatus(selectedTask.id))
        dispatch(updateSelectedTaskStatus(selectedTask.id))

    } 

    return (
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
                                onClick={onClickChangeStatus}
                                startIcon={<Done />}
                                color="primary"
                                variant="contained">
                                {selectedTask.isCompleted ? 'Completado' : 'Completar'}
                            </Button>

                            <Button
                                startIcon={<Edit />}
                                color="secondary"
                                variant="contained">
                                Editar
                            </Button>

                            <Button
                                startIcon={<DeleteIcon />}
                                color="error"
                                variant="contained">
                                Eliminar
                            </Button>

                        </Box>


                    </TableCell>


                </TableRow>

                <TableRow>



                </TableRow>




            </TableBody>
        </Table>
    )
}
