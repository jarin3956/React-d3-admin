import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#CDCDCD',
    '&:hover': {
        backgroundColor: '#CDCDCD'
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

function SearchBar() {
    return (
        <Search sx={{ paddingRight: '50px' }}>
            <SearchIconWrapper >
                <SearchIcon sx={{ color: 'black' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default SearchBar