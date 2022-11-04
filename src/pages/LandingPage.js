import "../stylesheets/landingpage.css";
import DataTable from "../tables/datatable.js"
import PieChart from "../tables/PieChart.js"
import {TRANSACTIONS} from "../data/data.js"


function App() {
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

export default App;