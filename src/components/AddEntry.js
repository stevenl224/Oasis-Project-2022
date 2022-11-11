import { inputUnstyledClasses } from "@mui/base";
import React from "react";
import { useState } from 'react'
import '../stylesheets/addentry.css';

// create state for 'showForm'
// button toggles state
// wrap add section in an if (showForm == true,  then display add section)

function AddEntry(props) {
    const [openForm, setOpenForm] = useState(false);

    const onButtonClick = () => {
        setOpenForm(!openForm);
    }

    const handleForm = (e) => {
        setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }))
    };

    const [inputs, setInputs] = useState({
        date: '',
        description: '',
        category: '',
        amount: '',
      });
        
    const updateTable = () => {
        const before = props.transactions
        before.push({date: inputs.date, 
                    description: inputs.description, 
                    category: inputs.category, 
                    amount: inputs.amount})
        props.setTransactions(before)
        props.setSpentSoFar()
        console.log(props.transactions)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        updateTable();
    }


    if (!openForm) {
        return (
        <>
            <button onClick={onButtonClick}>
                Add
            </button>
        </>
        )

    } else {
        return (
            <>
            <div class="addform">
                <form onSubmit={handleSubmit}>
                    <label for="date">Date</label>
                        <input
                            name = "date" 
                            type="text" 
                            placeholder="Enter Date" 
                            onChange={handleForm}
                            required/>

                    <label for="description">Description</label>
                        <input 
                            name = "description"
                            type="text" 
                            placeholder="Enter Description" 
                            onChange={handleForm}
                            required/>

                    <label for="category">Category</label>
                        <input 
                            name = "category"
                            type="text" 
                            placeholder="Enter Category" 
                            onChange={handleForm}
                            required/>

                    <label for="amount">Amount</label>
                        <input 
                            name="amount"
                            type="text" 
                            placeholder="Enter Amount ($)" 
                            onChange={handleForm}
                            required/>

                    <input 
                        type = "submit"
                        value = "Submit"
                    />
                    <button onClick={onButtonClick}>Cancel</button>
                </form>
            </div>
            </>
        )
    }
}

export default AddEntry;