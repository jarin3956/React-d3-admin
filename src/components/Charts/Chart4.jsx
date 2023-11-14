import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function Chart4() {
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

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis);

        svg.append('g')
            .call(yAxis);

        const line = d3.line()
            .x((d, i) => xScale(i))
            .y(d => yScale(d));

        svg.append('path')
            .data([data])
            .attr('fill', 'none')
            .attr('stroke', 'blue')
            .attr('stroke-width', 2)
            .attr('d', line);

    }, []); // Empty dependency array to run the useEffect only once

    return (
        <div ref={chartContainerRef}></div>
    );
}

export default Chart4;
