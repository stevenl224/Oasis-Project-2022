import "../stylesheets/landingpage.css";
import { useState } from "react";  
import DataTable from "../components/datatable.js"
import PieChart from "../components/PieChart.js"
import moneySpent from "../components/moneySpent.js"
import {TRANSACTIONS} from "../data/data.js"


function LandingPage() {

  const[spentSoFar, setSpentSoFar] = useState(200);
  const[totalToSpend, setTotalToSpend] = useState(400);

    return (
      <div>
    <div>
      <h1>Hi</h1>
    </div>
    <DataTable transactions = {TRANSACTIONS}/>
    <PieChart/>
    <div><moneySpent spentSoFar={spentSoFar} setSpentSoFar={setSpentSoFar} totalToSpend={totalToSpend} setTotalToSpend={setTotalToSpend}/></div>
    

    </div>
    )
}

export default LandingPage;