import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);

    const [newbudg, setNewbudg] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const submitEvent = () => {
        if (newbudg > 20000){
            alert("The budget is too high, you cannot have more than 20000!");
            setNewbudg(20000);
            return;

        }else if (newbudg < totalExpenses) {
            alert("The budget is too low, you need at least a budget of " + totalExpenses);
            return;
        } else setBudget();
      

    }

    const increaseAllocation = (modifier) =>{
        setNewbudg (newbudg+modifier)    
    }

    const decreaseAllocation = (modifier) =>{
        setNewbudg (newbudg-modifier)
    }

    const setBudget = () => {

        dispatch({
            type: 'SET_BUDGET',
            payload: newbudg ,
        });
    }

    return (
        
        <div className='alert alert-secondary'>
            <p align="center">
            <div>
                <label>Budget: £
                    <input
                        required='required'
                        type='number'
                        value={newbudg}
                        placeholder={budget}
                        style={{ marginLeft: '1rem' }}
                        onChange={(event) => setNewbudg(event.target.value)}>
                    </input>                              
                </label>
            </div>
            </p>
            <p align="center">
            <div class="btn btn-light" style={{margintop: '1rem'}}>
                
                    <button className="btn btn-secondary btn-sm" onClick={event=> increaseAllocation(10)} style={{ marginLeft: '1rem' }}>+10</button>
                    <button className="btn btn-secondary btn-sm" onClick={event=> decreaseAllocation(10)} style={{ marginLeft: '1rem' }}>-10</button>
                    <button className="btn btn-primary btn-sm" onClick={submitEvent} style={{ marginLeft: '1rem', marginRight: '1rem'}}>Set</button>
               
            </div>
            </p>
        </div>
    );
};

export default Budget;