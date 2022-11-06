import React from "react";
import { useState } from 'react'

// create state for 'showForm'
// button toggles state
// wrap add section in an if (showForm == true,  then display add section)

function Form() {
    const [openForm, setOpenForm] = useState(false);

    const onButtonClick = () => {
        setOpenForm(!openForm);
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
                <form>
                    <label for="date">Date</label>
                    <input type="text" placeholder="Enter Date" required></input>

                    <label for="description">Description</label>
                    <input type="text" placeholder="Enter Description" required></input>

                    <label for="category">Date</label>
                    <input type="text" placeholder="Enter Category" required></input>

                    <label for="amount">Date</label>
                    <input type="text" placeholder="Enter Amount ($)" required></input>

                    <button type="submit">Add</button>
                    <button onClick={onButtonClick}>Cancel</button>
                </form>
            </>
        )
    }
}

export default Form;