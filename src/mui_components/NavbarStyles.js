import { styled, Box , Toolbar } from '@mui/material'
import {theme} from '../theme/theme.js'

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
}))

const IconsContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
})

export { CustomToolBar, SearchBar, IconsContainer }