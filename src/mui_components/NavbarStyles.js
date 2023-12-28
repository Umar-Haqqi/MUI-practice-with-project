import { styled, Box, Toolbar } from '@mui/material'

const CustomToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const SearchBar = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    padding: '2px 8px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
    [theme.breakpoints.down('sm')]: {
        width: '50%',
    }
}))

const IconsContainer = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

export { CustomToolBar, SearchBar, IconsContainer, UserBox }