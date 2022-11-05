import ProgressBar from 'react-bootstrap/ProgressBar';
import '../stylesheets/app.css';
import React from 'react';
import { Box } from '@mui/system';
 
// TODO: implement a variable moneyPercent that is computed with money spent / money goal.
// moneyPercent will be utilized in the Progress Bar percentage as well as the Description of the Bar.
// Somehow retrieve the information from the log of transactions to
 
function MoneySpent(props) {
 
    // define value for money spent (using const state)

    const progressBar = (
        <div>
            <Box>
                <h1>Amount of Money Spent</h1>
                <Box>
                    <ProgressBar now={props.spentSoFar / props.totalToSpend * 100}/>
                    <p>You have spent {props.spentSoFar / props.totalToSpend * 100}% of your money goal so far.</p>
                </Box>
                <p>You have ${props.totalToSpend - props.spentSoFar} left to spend this month.</p>
            </Box>
        </div>
    );
 
    return progressBar 
}
export default MoneySpent;

