import { AccountBox, Article, Brightness6, Groups, Home, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box sx={{
      flex: 2,
      display: { xs: "none", sm: "block" },
      p: 2,
    }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home page" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Brightness6 />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  )
}

export default Sidebar
