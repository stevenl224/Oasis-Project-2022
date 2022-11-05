import "../stylesheets/landingpage.css";
import { useState } from "react";  
import DataTable from "../components/datatable.js"
import PieChart from "../components/PieChart.js"
import MoneySpent from "../components/MoneySpent.js"
import {TRANSACTIONS} from "../data/data.js"


function LandingPage(props) {

  const[spentSoFar, setSpentSoFar] = useState(200);
  const[totalToSpend, setTotalToSpend] = useState(400);

    return ( 
      <div> 
    <div>
      <h1>Hi</h1>
    </div>
    <DataTable transactions = {TRANSACTIONS}/> 
    <PieChart/> 
    <MoneySpent spentSoFar={spentSoFar} setSpentSoFar={setSpentSoFar} totalToSpend={totalToSpend} setTotalToSpend={setTotalToSpend}/>
    

    </div>
    )
}

export default LandingPage;