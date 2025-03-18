import { useDispatch, useSelector } from "react-redux"

// material
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Button, Paper } from "@mui/material";

// redux
import { setTaskForm, toggleShowFormSave } from "./store/slices/taskSlice";

// components
import { ListTasks, Detail, FormSave } from "./Task/";
import { Notification } from "./shared/Notification";


const App = () => {

  const { selectedTask, showFormSave, } = useSelector(state => state.task);
  const { show, message,severity } = useSelector(state => state.notification);
  const dispatch = useDispatch();

  const onClickShowForm = () => {
    dispatch(setTaskForm({ id: null, name: '', description: '', isCompleted: false }));
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
            <Paper sx={{ margin: "20px auto", overflow: "hidden", textAlign: 'center' }}>
              {

                showFormSave
                  ?
                  <FormSave />
                  :
                  selectedTask
                    ? <Detail />
                    :

                    <Alert
                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}
                      abouticon={<CheckIcon fontSize="inherit" />}
                      severity="warning">
                      Por favor selecciona una tarea
                    </Alert>

              }
            </Paper>
          </Grid>

        </Grid>
      </Box>


            {/* Mensaje de alerta */}
            <Notification showNotification={show} message={message} severity={severity} />

    </>
  )
}

export default App