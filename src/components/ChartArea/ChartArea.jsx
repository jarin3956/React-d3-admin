import React from 'react';
import Grid from '@mui/material/Grid';
import Charts from '../Charts/Charts';
function ChartArea() {
    return (
        <Grid item xs={12} md={6} style={{ padding: '10px' }}>
            <div style={{ background: 'green', height: '100%', width: '100%', borderRadius: '20px' }}>
                <Charts/>
            </div>
        </Grid>
    )
}

export default ChartArea