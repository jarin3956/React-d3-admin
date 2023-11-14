import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function Chart3() {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const data = [10, 20, 30, 40, 50];

        const width = 400;
        const height = 200;

        // Clear any existing content in the container
        d3.select(chartContainerRef.current).selectAll('*').remove();

        const svg = d3.select(chartContainerRef.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 80)
            .attr('y', d => 200 - d)
            .attr('width', 75)
            .attr('height', d => d)
            .attr('fill', 'white');
    }, []);

    return (
        <div ref={chartContainerRef}></div>
    );
}

export default Chart3;
