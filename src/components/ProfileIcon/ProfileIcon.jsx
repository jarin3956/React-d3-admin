import React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

function ProfileIcon() {
    const imageUrl = './images/user-image.png'
    return (
        <IconButton color="black">
            <Avatar alt="User" src={imageUrl} />
        </IconButton>
    )
}

export default ProfileIcon