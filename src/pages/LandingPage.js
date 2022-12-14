import "../stylesheets/landingpage.css";
import { useState } from "react";  
import DataTable from "../components/datatable.js"
import PieChart from "../components/PieChart.js"
import MoneySpent from "../components/MoneySpent.js"
import AddEntry from "../components/AddEntry.js"

function LandingPage(props) {

  const[transactions, setTransactions] = useState([
    {
      date: "9/8/21",
      description: "back to school supplies",
      category: "Shopping",
      amount: 20,
    },
    {
      date: "9/8/22",
      description: "jefes",
      category: "Food",
      amount: 10,
  
    },
    {
      date: "9/13/22",
      description: "monthly rent",
      category: "Rent",
      amount: 15,
    },
    {
      date: "9/20/22",
      description: "plane ticket",
      category: "Transportation",
      amount: 10,
    },
    {
      date: "9/27/22",
      description: "monthly gym membership",
      category: "Personal",
      amount: 8,
    },
    {
      date: "9/10/22",
      description: "shawarma",
      category: "Food",
      amount: 11.21,
    },
    {
      date: "9/10/22",
      description: "shawarma",
      category: "Food",
      amount: 11.21,
    },
    {
      date: "10/15/23",
      description: "this worked",
      category: "Rent",
      amount: 900,
    }
  ])
  
  const sumTotalSpending = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);

  const[spentSoFar, setSpentSoFar] = useState(sumTotalSpending);

  return ( 
    <body>

      <div className='greeting'>
        Hello, {props.user.firstName}.
      </div>

      <div className='stuff'>
        <h2>Here are your transactions for the week.</h2>
      </div>

      <div className = 'progress'><MoneySpent spentSoFar={spentSoFar}
        budget={props.user.budget}  
        />
      </div>
        
      <div className = 'transactions'> 
        <DataTable transactions={transactions} setTransactions={setTransactions}/> 
      </div>


{/* need to implement setSpentSoFar here when a data entry is inputted so that the totals increase */}
       <div className = 'addEntry-button'>
        <AddEntry transactions={transactions} setTransactions={setTransactions} setSpentSoFar={setSpentSoFar}/>
       </div>

      <div className = 'piechart'>       
        <PieChart transactions={transactions}/> 
      </div>

    </body>
  )
}

export default LandingPage;