import React, { useEffect, useState, useMemo } from 'react'
import ReactEcharts from 'echarts-for-react'

const PieChart = (props) => {

    const { chartData, expanded } = props;
    

    const pieOptions = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            left: 'left',
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '90%'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'center',
                },
                //   emphasis: {
                //       label: {
                //           show: true,
                //           fontSize: '40',
                //           fontWeight: 'bold',
                //       },
                //   },
                labelLine: {
                    show: false,
                },
                top: '100px',
                data: chartData.ATTRIBUTE.map((item, index)=>{
                    return{
                        value: chartData.VALUES[0][index],
                        name: item,
                        // itemStyle: {
                        //     color: index % 3 === 0 ? colorsList[0] : index % 2 === 0 ? colorsList[1] : colorsList[2],
                        // }
                    }
                }),
                realData: [
                    {
                        value: 750,
                        name: 'Search Engine',
                        itemStyle: {
                            color: '#ffc600',
                        },
                    },
                    {
                        value: 750,
                        name: 'Direct',
                        itemStyle: {
                            color: '#65d8cc',
                        },
                    },
                    {
                        value: 750,
                        name: 'Email',
                        itemStyle: {
                            color: '#313679',
                        },
                    },
                ],
            },
        ],
    };

    const [option, setOption] = useState(pieOptions);
    useEffect(()=>{
        setOption(pieOptions)
    }, [expanded])


    return(
        <>
            <ReactEcharts 
                style={{
                    minHeight: '350px', 
                    minWidth: '350px', 
                    maxWidth: '460px'
                }} 
                option={option} 
            />
        </>
    )
}

export default PieChart;