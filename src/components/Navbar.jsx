import { Mail, NotificationsActive } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Typography } from '@mui/material'
import React from 'react'
import { SearchBar, CustomToolBar, IconsContainer, UserBox } from '../mui_components/NavbarStyles'

const Navbar = () => {

  return (
    <>
      <AppBar position='sticky'>
        <CustomToolBar>

          {/* brand name */}
          <Typography variant='h5' sx={{
            display: { xs: 'none', sm: 'block' }
          }}>Umar Haqqui .</Typography>

          <Typography variant='h5' sx={{
            display: { xs: 'block', sm: 'none' }
          }}>UH .</Typography>


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

            <Avatar
              sx={{
                width: 35,
                height: 35,
              }}
              src=''
            />
          </IconsContainer>


          {/* Login User */}
          <UserBox sx={{
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
      </AppBar>
    </>
  )
}

export default Navbar
