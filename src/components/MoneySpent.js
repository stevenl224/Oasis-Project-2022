import React from 'react';
import '../stylesheets/moneyspent.css'
 
// TODO: implement a variable moneyPercent that is computed with money spent / money goal.
// moneyPercent will be utilized in the Progress Bar percentage as well as the Description of the Bar.
// Somehow retrieve the information from the log of transactions to
 
function MoneySpent(props) {
 
    // define value for money spent (using const state)
 // style={{'width':'2000px'}}
    return (
        //<html>
            <div>
                <h1>Amount of Money Spent</h1>
                    <div className="line">
                        <hr/>
                    </div>
                    <div className="progress-bar">
                        <progress value={props.spentSoFar / props.totalToSpend * 100} max='100' />
                    </div> 
                    {/* <td> */}
                      <p>You have spent {props.spentSoFar / props.totalToSpend * 100}% of your money goal so far.</p>
                    {/* </td> */}
                    {/* <td> */}
                    <p>You have ${props.totalToSpend - props.spentSoFar} left to spend this month.</p>
                    {/* </td> */}

            </div>
        //</html>
        
    );
}
 
export default MoneySpent;
