import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function App(props) {

  const [group, setGroup]= useState();
  const [money, setMoney]= useState();
  useEffect(()=>{
    const getCategory= [];
    const getMoney= [];
    const getData = async()=>{
      const receivedData= props.transactions;
      console.log(receivedData)
      for(let i=0; i<receivedData.length; i++)
      {
        if (getCategory.includes(receivedData[i].category))
        {
          let indx = getCategory.indexOf(receivedData[i].category)
          getMoney[indx] = getMoney[indx] + receivedData[i].amount;
        }
        else
        {
          getCategory.push(receivedData[i].category);
          getMoney.push(receivedData[i].amount);
        }
      }
      setGroup(getCategory)
      setMoney(getMoney)

    }
    getData();
  },[]);

  return(
    <React.Fragment>
        <div classname="pie-container">
        <div className="row">

            <div className="col-md-5 mb-3 mt-3">

            </div>
          <div className="col-md-5 mb-3 mt-3">
          <div>
    <Pie
      height = { 400 }
      width = { 400 }

      data = {{
        labels: group,
        datasets: [
          {
            label:'Week 1 Spending',
            data: money,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 10
          },
        ],
      }}

    


      options = {{
        maintainAspectRatio: false,
        responsive: true,

        plugins: {
            title: {
                fontSize: 50,
                text: 'Weekly Spending',
                display: true,
                font: {size: 30}
          },
          legend: {
            labels: {
            font:{size:15}
          }

          }
        }
      }}
    /> 
  </div>
  

        </div>
        </div>
        </div>
  
 
  </React.Fragment>
  )
}


