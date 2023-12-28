import { Button, Typography } from '@mui/material'
// import Setting from '@mui/icons-material/Settings';
// import Add from '@mui/icons-material/Add';

import { Settings, Add, Delete } from '@mui/icons-material';

function App() {

  return (
    <>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary">Settings</Button>
      <Button startIcon={<Add />} variant="contained" color="success">Add</Button>
      <Button startIcon={<Delete />} variant="contained" color="secondary" disabled>Delete</Button>
      <Button variant="outlined">Outlined</Button>

      <Typography marginY={2} variant="h1" bgcolor={"grey.300"} component="p">
        it uses h1 styles but its a p tag
      </Typography>

      {/* unique button */}
      <Button variant='contained'
        sx={
          {
            backgroundColor: 'skyblue',
            color: '#888',
            margin: 1,
            '&:hover': {
              backgroundColor: 'lightblue',
              
            },
          }
        }>Custom Button
      </Button>
    </>
  )
}

export default App
