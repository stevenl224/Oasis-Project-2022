import "../stylesheets/landingpage.css";
import { useState } from "react";  
import DataTable from "../components/datatable.js"
import PieChart from "../components/PieChart.js"
import MoneySpent from "../components/MoneySpent.js"
import {TRANSACTIONS} from "../data/data.js"


function LandingPage(props) {

  const[spentSoFar, setSpentSoFar] = useState(600);
  //need to pass in a user so we can take the name and budget out.
  const budget = props.budget;

    return ( 
      <body>
        <div className='greeting'>
          Hello, {props.user.username}.
        </div>
        <div className='stuff'>
          <h2>Here are your transactions for the week.</h2>
        </div>
         <div className = 'transactions'> 
          <DataTable transactions = {TRANSACTIONS}/> 
       </div>
        <div className = 'piechart'>       
          <PieChart/> 
        </div>
        <div className = 'progress'><MoneySpent spentSoFar={spentSoFar}
          setSpentSoFar={setSpentSoFar} 
          budget={props.user.budget}  
          />
        </div>
        </body>
    )
}

export default LandingPage;