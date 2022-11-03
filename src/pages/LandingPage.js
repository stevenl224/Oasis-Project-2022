import "../stylesheets/landingpage.css";
import DataTable from "../tables/datatable.js"
import PieChart from "../tables/PieChart.js"
import {TRANSACTIONS} from "../data/data.js"


function App() {
    return (
    <>
    <div>
      <header> Hi </header>
    </div>
    <DataTable transactions = {TRANSACTIONS}/> 
    <PieChart/>
    </>
    )
}

export default App;