import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react'
import { Box } from '@mui/material'
import { treeData } from './chartConfig'
import { 
    BarChart, 
    LineChart, 
    PieChart, 
    TreeChart 
} from './chartTypes'
import 'echarts-gl'


const ChartContainer = (props) => {


    const {
        hasGraph,
        graphDetails,
        expanded
    } = props;

    const [chartType, setChartType] = useState(hasGraph?graphDetails.graphType:null)

    useEffect(() => {
        console.log("Chart Data", graphDetails)
    },[graphDetails]);

    return(
        <>
            {  
                chartType === 'bar' ? (
                    <BarChart expanded={expanded} chartData={graphDetails.graphData} />
                ) : chartType === 'pie' ? (
                    <PieChart expanded={expanded} chartData={graphDetails.graphData} />
                ) : chartType === 'line' ? (
                    <LineChart expanded={expanded} chartData={graphDetails.graphData} />
                ) : chartType === 'hierarchical' ? (
                    <TreeChart expanded={expanded} chartData={graphDetails.graphData} />
                ) : (
                    <Box>
                        No Chart
                    </Box>
                )
            }
            
        </>
    )
}

export default ChartContainer;