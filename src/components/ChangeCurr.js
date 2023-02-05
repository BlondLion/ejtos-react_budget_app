import React from 'react';


const ChangeCurr = () => {

    return (
        <div className="btn-group">
            <div className="btn btn-success">
                <div htmlFor="inputGroupSelect01">Currency (
    
                <select class="btn btn-success dropdown-toggle" id="inputGroupSelect01" >
                    <option defaultValue="Pound" name="pound">£ Pound</option>
                    <option value="Dollar" name="dollar">$ Dollar</option>
                    <option value="Euro" name="euro">€ Euro</option>
                    <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                </select>
                )</div>
            </div>
        </div>
    );   
};

export default ChangeCurr;

