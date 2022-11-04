import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';
import React from 'react';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import AnimatedExample from './AnimatedExample';
import ProgressBarExample from './ProgressBarEx';
 
// TODO: implement a variable moneyPercent that is computed with money spent / money goal.
// moneyPercent will be utilized in the Progress Bar percentage as well as the Description of the Bar.
// Somehow retrieve the information from the log of transactions to
 
function moneySpent(spentSoFar, totalToSpend) {
 
    // define value for money spent (using const state)
 
    return (
        <Box>
            <h1>Amount of Money Spent</h1>
            <Box>
                <ProgressBar now={spentSoFar / totalToSpend * 100}/>
                <p>You have spent {spentSoFar / totalToSpend * 100}% of your money goal so far.</p>
            </Box>
            <p>You have ${totalToSpend - spentSoFar} left to spend this month.</p>
        </Box>
    )
}
 
export default moneySpent;

