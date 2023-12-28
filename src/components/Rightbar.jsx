import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box sx={{
      flex: 3,
      display: { xs: "none", sm: "block" },
      bgcolor: 'lightCoral',
      p: 2
    }}
    >RightBar here</Box>
  )
}

export default Rightbar
