import { useSelector } from 'react-redux';

// material ui
import List from '@mui/material/List';
import { Divider, ListSubheader } from "@mui/material";

import { ListItemTask } from './index'

import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { Radio, FormControlLabel, Paper } from "@mui/material";


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
                        <ListItemTask key={task.id} task={task} />
                    ))}
                </TableBody>
            </Table>
        </Paper>

    )
}






{/* <List subheader={
    <ListSubheader component="div" id="nested-list-subheader">
        Lista de tareas 2
    </ListSubheader>}
>
    {
        tasks.map(task => (
            <>
                   <ListItemTask key={task.id} task={task} />
                   <Divider component="li" />
            </>
     

        ))
    }

</List> */}