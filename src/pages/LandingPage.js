import "../stylesheets/landingpage.css";
import DataTable from "../components/datatable.js"
import PieChart from "../components/PieChart.js"
import {TRANSACTIONS} from "../data/data.js"


function LandingPage() {
    return ( 
      <div> 
    <div>
      <h1>Hi</h1>
    </div>
    <DataTable transactions = {TRANSACTIONS}/> 
    <PieChart/> 
    </div>
    )
}

export default LandingPage;