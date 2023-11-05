import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

function SideBarItems() {
  return (
    <List>
            <ListItem
                button
                sx={{
                    height: '50px',
                    padding: 0,
                    backgroundColor: 'green',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'green',
                        color: 'white',
                    },

                }}
            >
                <DashboardIcon sx={{ paddingLeft: '40px' }} />
                <ListItemText sx={{ paddingLeft: '10px' }} primary="Dashboard" />
            </ListItem>
            <ListItem
                button
                sx={{
                    height: '50px',
                    padding: 0,
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'green',
                        color: 'white',
                    },
                }}
            >
                <AccountBalanceWalletIcon sx={{ paddingLeft: '40px' }} />
                <ListItemText sx={{ paddingLeft: '10px' }} primary="Accounts" />
            </ListItem>
            <ListItem
                button
                sx={{
                    height: '50px',
                    padding: 0,
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'green',
                        color: 'white',
                    },
                }}
            >
                <AttachMoneyIcon sx={{ paddingLeft: '40px' }} />
                <ListItemText sx={{ paddingLeft: '10px' }} primary="Payroll" />
            </ListItem>
            <ListItem
                button
                sx={{
                    height: '50px',
                    padding: 0,
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'green',
                        color: 'white',
                    },
                }}
            >
                <SummarizeIcon sx={{ paddingLeft: '40px' }} />
                <ListItemText sx={{ paddingLeft: '10px' }} primary="Reports" />
            </ListItem>
            <ListItem
                button
                sx={{
                    height: '50px',
                    padding: 0,
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'green',
                        color: 'white',
                    },
                }}
            >
                <PersonIcon sx={{ paddingLeft: '40px' }} />
                <ListItemText sx={{ paddingLeft: '10px' }} primary="Advisor" />
            </ListItem>
            <ListItem
                button
                sx={{
                    height: '50px',
                    padding: 0,
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'green',
                        color: 'white',
                    },
                }}
            >
                <ContactsIcon sx={{ paddingLeft: '40px' }} />
                <ListItemText sx={{ paddingLeft: '10px' }} primary="Contacts" />
            </ListItem>
        </List>
  )
}

export default SideBarItems