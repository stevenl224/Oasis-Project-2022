import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  return <div>
    <Pie
      data = {{
        labels: [
          'Groceries',
          'Rent',
          'Shopping',
          'Leisure'
        ],
        datasets: [
          {
            label:'Week 1 Spending',
            data: [400, 1500, 200, 150],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            ],
          },
        ],
      }}

      height = { 500 }
      width = { 500 }
      options = {{
        maintainAspectRatio: false,
      }}
    /> 
  </div>
}