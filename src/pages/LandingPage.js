import "../stylesheets/landingpage.css";
import { useState } from "react";  
import DataTable from "../components/datatable.js"
import PieChart from "../components/PieChart.js"
import MoneySpent from "../components/MoneySpent.js"
import LinearDeterminate from "../components/LinearDeterminate.js"
import {TRANSACTIONS} from "../data/data.js"


function LandingPage(props) {

  const[spentSoFar, setSpentSoFar] = useState(40);
  const[totalToSpend, setTotalToSpend] = useState(400);

    return ( 
    <div> 
        <MoneySpent spentSoFar={spentSoFar}totalToSpend={totalToSpend}/>
      <div>
        <h1>Hi</h1>
      </div>
    <DataTable transactions = {TRANSACTIONS}/> 
    <PieChart/> 
    <LinearDeterminate spentSoFar={spentSoFar}totalToSpend={totalToSpend}/>
    </div>
    )
}

export default LandingPage;

