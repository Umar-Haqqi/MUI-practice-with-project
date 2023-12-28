import { Button, styled } from '@mui/material'
import { Settings, Add, Delete } from '@mui/icons-material';

function App() {

  // making button component for reusablity
  const BlueButton = styled(Button)(({ theme }) => ({

    // giving theme color here
    backgroundColor: theme.palette.other.main,
    color: theme.palette.primary.light,

    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
  }));

  return (
    <>

      {/* Custom button with MUI */}
      <BlueButton startIcon={<Add />}>Custom button</BlueButton>
      <BlueButton startIcon={<Delete />}>Another button</BlueButton>
      <BlueButton startIcon={<Settings />}>Another button</BlueButton>
    </>
  )
}

export default App
