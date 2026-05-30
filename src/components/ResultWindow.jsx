import { useContext } from "react";

import { CalExpressionContext } from "../context/CalExpressionContext";


function ResultWindow(){
    const { calExpressionString, setCalExpressionString} = useContext(CalExpressionContext);
    
    return (
        <div className="mb-1">
            <input 
                type="text" 
                className="form-control" 
                id="txtResultWindow" 
                placeholder="0.00" 
                value={calExpressionString} 
            />
        </div>
    )
}

export default ResultWindow