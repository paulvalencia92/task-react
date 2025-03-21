// redux
import { useSelector } from 'react-redux';

// material ui
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

// components
import { ListItemTask } from './index'




export const ListTasks = () => {

    const { tasks } = useSelector(state => state.task);


    return (
        <Paper sx={{ margin: "20px auto", overflow: "hidden" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}
                            sx={{ backgroundColor: 'primary.main', fontWeight: "bold", textAlign: "center", color: 'white' }}>
                            Listado de Tareas
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map(task => (
                        <ListItemTask key={task.id} taskItem={task} />
                    ))}
                </TableBody>
            </Table>
        </Paper>

    )
}
