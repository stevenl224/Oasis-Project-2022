import React from 'react';
import { Box } from '@mui/system';
import '../stylesheets/moneyspent.css'
 
// TODO: implement a variable moneyPercent that is computed with money spent / money goal.
// moneyPercent will be utilized in the Progress Bar percentage as well as the Description of the Bar.
// Somehow retrieve the information from the log of transactions to
 
function MoneySpent(props) {
 
    // define value for money spent (using const state)

    return (
        <html>
            <div className="progress-bar-box">
                <h1>Amount of Money Spent</h1>
                    <div className="line">
                        <hr/>
                    </div>
                    <div className="progress-bar">
                        <progress value={props.spentSoFar / props.totalToSpend * 100} max='100' width='500px'/>
                    </div> 
                    <td>
                     { <p>You have spent {props.spentSoFar / props.totalToSpend * 100}% of your money goal so far.</p> }
                    </td>
                    <td>
                    <p>You have ${props.totalToSpend - props.spentSoFar} left to spend this month.</p>
                    </td>

            </div>
        </html>
        
    );
}
 
export default MoneySpent;
