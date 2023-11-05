import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SideBar from '../SideBar/SideBar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#EFEBEB',
    '&:hover': {
        backgroundColor: '#EFEBEB'
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    borderRadius: '15px'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Navbar() {


    return (

        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1
                }}
            >
                <AppBar position="static" sx={{ background: 'white' }}  >
                    <Toolbar sx={{ justifyContent: 'end' }}>
                        <Search sx={{ paddingRight: '50px' }}>
                            <SearchIconWrapper >
                                <SearchIcon sx={{ color: 'black' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <IconButton color="black">
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton color="black">
                            <Avatar alt="User" src='./images/user-image.png' />
                        </IconButton>
                        <IconButton color="black">
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div style={{ background: 'blue', height: '100vh', margin: '50px' }} >
                </div>
            </Box>
        </Box>
    )
}

export default Navbar