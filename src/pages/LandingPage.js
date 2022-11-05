import "../stylesheets/landingpage.css";
import { useState } from "react";  
import DataTable from "../components/datatable.js"
import PieChart from "../components/PieChart.js"
import MoneySpent from "../components/MoneySpent.js"
import {TRANSACTIONS} from "../data/data.js"


function LandingPage(props) {

  const[spentSoFar, setSpentSoFar] = useState(200);
  const[totalToSpend, setTotalToSpend] = useState(400);

      //  <div className = 'transactions'> </div>
    return ( 
      <body>
        <div className='greeting'>
          <h1>Hello, user.</h1>
          <h2>Here are your transactions for the day.</h2>
        </div>
         <div className = 'transactions'> 
          <DataTable transactions = {TRANSACTIONS}/> 
       </div>
        <div className = 'piechart'>       
          <PieChart/> 
        </div>
        <div className = 'progress'><MoneySpent spentSoFar={spentSoFar}
          setSpentSoFar={setSpentSoFar} 
          totalToSpend={totalToSpend}
          setTotalToSpend={setTotalToSpend}/>
        </div>
        </body>
    )
}

export default LandingPage;