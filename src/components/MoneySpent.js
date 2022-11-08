import React from 'react';
import '../stylesheets/moneyspent.css'
 
// TODO: implement a variable moneyPercent that is computed with money spent / money goal.
// moneyPercent will be utilized in the Progress Bar percentage as well as the Description of the Bar.
// Somehow retrieve the information from the log of transactions to
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
} 


function MoneySpent(props) {
 
    return (
            <div className="realign-top-bottom">
                <div className="line">   
                    <hr/>
                </div>

                    <div className="progress-bar">
                        <progress value={props.spentSoFar / props.budget * 100} max='100' />
                    </div> 
                    <div className="realign-table">
                        <td>
                        <p>You have spent {roundToTwo(props.spentSoFar / props.budget * 100)}% of your money goal so far.</p>
                        </td>
                        <td>
                        <p>You have ${roundToTwo(props.budget - props.spentSoFar)} left to spend this month.</p>
                        </td>
                    </div>
            </div>
        
    );
}
 
export default MoneySpent;
