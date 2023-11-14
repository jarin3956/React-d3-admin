import React from 'react';
import Grid from '@mui/material/Grid';
import ChartArea from '../ChartArea/ChartArea';
function DataCenter() {

    return (
        <div style={{ height: '100vh', background: '#CDCDCD', width: '100%', }}>
            <Grid container spacing={2} style={{ height: '100%', padding: '40px 30px 30px 40px' }}>
                <ChartArea />
                <ChartArea />
                <ChartArea />
                <ChartArea />
            </Grid>
        </div>
    );
}
export default DataCenter;

