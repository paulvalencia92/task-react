import { useDispatch, useSelector } from "react-redux"

// material
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

// components

import { ListTasks, Detail } from "./Task/";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Button, Paper } from "@mui/material";
import { toggleShowFormSave } from "./store/slices/taskSlice";





const App = () => {

  const { selectedTask, showFormSave } = useSelector(state => state.task);
  const dispatch = useDispatch();

  const onClickShowForm = () => {
    dispatch(toggleShowFormSave(true));
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>

        <Grid sx={{ width: "80%" }} container spacing={2}>

          <Grid size={6}>
            <ListTasks />
            <Button onClick={onClickShowForm} variant="contained">Crear tarea</Button>
          </Grid>

          <Grid size={6}>
            {

              showFormSave
                ?
                <p>formulario</p>
                :
                selectedTask
                  ? <Detail />
                  :
                  <Paper sx={{ margin: "20px auto", overflow: "hidden", textAlign: 'center' }}>
                    <Alert
                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}
                      abouticon={<CheckIcon fontSize="inherit" />}
                      severity="warning">
                      Por favor selecciona una tarea
                    </Alert>
                  </Paper>
            }
          </Grid>

        </Grid>
      </Box>

    </>
  )
}

export default App