import { Mail, NotificationsActive } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SearchBar, CustomToolBar, IconsContainer, UserBox } from '../mui_components/NavbarStyles'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar position='sticky' >
        <CustomToolBar>

          {/* brand name */}
          <Typography variant='h5'
            sx={{
              display: { xs: 'none', sm: 'block' }
            }}
          >Umar Haqqui .</Typography>

          <Typography variant='h5'
            sx={{
              display: { xs: 'block', sm: 'none' }
            }}
          >UH .</Typography>


          {/* search bar */}
          <SearchBar>
            <InputBase placeholder='Search...' />
          </SearchBar>


          {/* icons */}
          <IconsContainer sx={{
          }}>
            <Badge badgeContent={1} color='error'>
              <Mail />
            </Badge>

            <Badge badgeContent={4} color='error'>
              <NotificationsActive />
            </Badge>

            <Avatar onClick={e => setOpen(true)} // open menu when clicked
              sx={{
                width: 35,
                height: 35,
              }}
              src=''
            />
          </IconsContainer>


          {/* Login User */}
          <UserBox onClick={() => setOpen(true)} // open menu when clicked
            sx={{
            }}>
            <Avatar
              sx={{
                width: 35,
                height: 35,
              }}
              src=''
            />
          </UserBox>


        </CustomToolBar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"

          // menu open/close toggle
          open={open}
          onClose={() => {
            setOpen(false)
          }}

          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>

      </AppBar>
    </>
  )
}

export default Navbar
