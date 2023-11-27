import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react'

const barChartDummyData = {
    'transaction': {
        source: [
            ['type', 'Credit', 'Debit'],
            ['Jan 2023', 12433, 27858],
            ['Feb 2023', 83121, 73634],
            ['Mar 2023', 83121, 73634],
            ['Apr 2023', 83121, 73634],
            ['May 2023', 83121, 73634],
        ]
    },
    'fy': {

    }
}

const BarChart = (props) => {

    const { chartData, expanded, dataType = 'transaction' } = props;

    const barOptions = {
        legend: {},
        tooltip: {},
        dataset: barChartDummyData[dataType],
        xAxis: { type: 'category' },
        yAxis: {},
        barWidth: 10,
        barGap: '90%',
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                itemStyle: {
                    color: '#313679',
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#65d8cc',
                },
            },
        ],
    };

    const [option, setOption] = useState(barOptions);
    useEffect(()=>{
        setOption(barOptions)
    }, [expanded])

    return(
        <ReactEcharts 
            style={{
                minHeight: '350px', 
                minWidth: '350px', 
                maxWidth: '460px'
            }}
            option={option} 
        />
    )
}

export default BarChart;