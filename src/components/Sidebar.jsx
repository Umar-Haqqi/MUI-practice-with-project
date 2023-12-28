import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box
      sx={{
        flex: 2,
        display: { xs: "none", sm: "block" },
        backgroundColor: 'skyblue',
        p: 2,
      }}
    >Sidebar Here</Box>
  )
}

export default Sidebar
