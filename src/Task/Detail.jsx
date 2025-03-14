// material ui
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { useSelector } from 'react-redux'


export const Detail = () => {

    const { selectedTask } = useSelector(state => state.task);

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
                    <TableCell colSpan={2}>{selectedTask.description}</TableCell>
                </TableRow>

            </TableBody>
        </Table>
    )
}
