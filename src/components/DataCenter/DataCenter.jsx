import React from 'react';
import Grid from '@mui/material/Grid';
import Chart1 from '../Charts/Chart1';
import Chart2 from '../Charts/Chart2';
import Chart3 from '../Charts/Chart3';
import Chart4 from '../Charts/Chart4';

function DataCenter() {

    return (
        <div style={{ height: '100vh', background: '#CDCDCD', width: '100%', }}>
            <Grid container spacing={2} style={{ height: '100%', padding: '40px 30px 30px 40px' }}>
                <Grid item xs={12} md={6} style={{ padding: '10px' }}>
                    <div style={{ background: 'green', height: '100%', width: '100%', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ maxWidth: '80%' }}>
                            <Chart1 />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: '10px' }}>
                    <div style={{ background: 'green', height: '100%', width: '100%', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ maxWidth: '80%' }}>
                            <Chart2 />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: '10px' }}>
                    <div style={{ background: 'green', height: '100%', width: '100%', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ maxWidth: '80%' }}>
                            <Chart3 />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: '10px' }}>
                    <div style={{ background: 'green', height: '100%', width: '100%', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ maxWidth: '80%' }}>
                            <Chart4 />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default DataCenter;

