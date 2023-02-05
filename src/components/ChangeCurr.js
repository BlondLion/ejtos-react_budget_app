import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const ChangeCurr = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (value) =>{
            dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    return (
        <div className="btn-group">
            <div className="btn btn-success">
                <div htmlFor="inputGroupSelect01">Currency (
    
                <select class="btn btn-success dropdown-toggle" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)} >
                    <option value="£" name="pound">£ Pound</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
                )</div>
            </div>
        </div>
    );   
};

export default ChangeCurr;

