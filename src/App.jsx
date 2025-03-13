import { useSelector } from "react-redux"

// material
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

// components

import { ListTasks } from "./Task/";




useSelector

const App = () => {

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        
        <Grid sx={{ width: "80%" }} container spacing={2}>

          <Grid size={6}>
            <ListTasks />
          </Grid>

          <Grid size={6}>
            <h3>Formulario</h3>
          </Grid>

        </Grid>
      </Box>









    </>
  )
}

export default App