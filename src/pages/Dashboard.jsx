import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import SideBar from '../components/SideBar/SideBar';
import SearchBar from '../components/SearchBar/SearchBar';
import NotificationIcon from '../components/NotificationIcon/NotificationIcon';
import ProfileIcon from '../components/ProfileIcon/ProfileIcon';
import MoreIcon from '../components/MoreIcon/MoreIcon';
import DataCenter from '../components/DataCenter/DataCenter';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1
        }}
      >
        <AppBar position="sticky" sx={{ background: 'white' }}  >
          <Toolbar sx={{ justifyContent: 'end' }}>
            <SearchBar />
            <NotificationIcon />
            <ProfileIcon />
            <MoreIcon />
          </Toolbar>
        </AppBar>
        <DataCenter />
      </Box>
    </Box>
  )
}

export default Dashboard