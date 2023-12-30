import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar"
import Feed from "./components/Feed"
import { Box, Stack } from "@mui/material"


function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={0} justifyContent="center">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  )
}

export default App
