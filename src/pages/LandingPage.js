import "../stylesheets/landingpage.css";
import DataTable from "../tables/DataTable.js"
// import Header from '//Header.js'
import PieChart from "../tables/PieChart.js"


function App() {
    return (
    <>
    <div className="welcome">
        {/* <Header/> */}
    </div>
    
    <DataTable/>
    <PieChart/>
    </>
    )
}

export default App;