import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  const img1 = 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D';

  const img2 = 'https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D'

  const img3 = 'https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww'

  return (
    <Box sx={{
      flex: 6,
      bgcolor: '#f4f4f4',
      p: 2,
    }}>
      <Post userName={"John Doe"} date={"12 hour ago"} photo={img1} desp={"This is my first post"}/>
      <Post userName={"Umar Haqui"} date={"1 hour ago"} photo={img2} desp={"This is my second post"}/>
      <Post userName={"muhammad ali"} date={"22 hour ago"} photo={img3} desp={"life is sad"}/>
    </Box>
  )
}

export default Feed
