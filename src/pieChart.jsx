import React from "react";
import Charts from 'react-apexcharts'

export default function Piechart() {
    const options = { dataLabels : {enabled : true}, series : [26, 79, 53, 64, 95],
    labels : ['aug','sept','oct','nov','dec'] }
    
    return(
        <div>
            <p>Pie-Chart</p>
            <Charts
            options={options}
            series={options.series}
            type='pie'
            width={500}
            />
        </div>
    )
}