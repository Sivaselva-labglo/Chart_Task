import React from "react";
import Charts from 'react-apexcharts'

export default function Linechart() {
  const options = {
    title : {text : 'Wall Street Shares'},
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value;
        }
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (value) { return '$' + value }
    },
    stroke: { curve: 'smooth' }
  }


  const series = [
    {
      name: 'Expenses', data: [
        { x: new Date('2022-11-07').getTime(), y: 36 },
        { x: new Date('2022-11-19').getTime(), y: 83 },
        { x: new Date('2022-11-30').getTime(), y: 29 },
        { x: new Date('2022-12-03').getTime(), y: 49 },
        { x: new Date('2022-12-16').getTime(), y: 20 },
        { x: new Date('2022-12-25').getTime(), y: 50 },
        { x: new Date('2023-01-20').getTime(), y: 93 } ]
    },

    {
      name: 'Profit',
      data: [
        { x: new Date('2022-11-05').getTime(), y: 76 },
        { x: new Date('2022-11-16').getTime(), y: 53 },
        { x: new Date('2022-11-28').getTime(), y: 92 },
        { x: new Date('2022-12-06').getTime(), y: 44 },
        { x: new Date('2022-12-16').getTime(), y: 66 },
        { x: new Date('2022-12-31').getTime(), y: 33 },
        { x: new Date('2023-01-16').getTime(), y: 66 }]
    }
  ]


  return (
    <div>
      <p>Line-Chart</p>
      <Charts
        options={options}
        series={series}
        type='line'
        width={600}
      />
    </div>
  )
}