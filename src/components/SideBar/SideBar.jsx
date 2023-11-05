import React from 'react';
import Drawer from '@mui/material/Drawer';
import SideBarImage from '../SideBarImage/SideBarImage';
import SideBarItems from '../SideBarItems/SideBarItems';

function SideBar() {
    return (
        <Drawer
            anchor="left"
            open={true}
            variant="persistent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                },
            }}
        >

            <SideBarImage />
            <SideBarItems />
        </Drawer>
    )
}

export default SideBar