import React from "react";
import Charts from 'react-apexcharts'

export default function Areachart() {
    const options = {xaxis : {categories : ['august','sept','oct','nov','dec']}, dataLabels : {enabled : true}}
    const series = [{name : 'rainFall', data : [26, 79, 53, 64, 95]},
                    {name : 'temperature', data : [52,47,43,39,35]}]
    
    return(
        <div>
            <p>Area-Chart</p>
            <Charts
            options={options}
            series={series}
            type='area'
            width={500}
            />
        </div>
    )
}