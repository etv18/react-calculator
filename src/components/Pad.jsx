import CalButton from "./CalButton";
import { useContext } from "react";
import { CalExpressionContext } from "../context/CalExpressionContext";
import { operations, operate, removeOneDigitAtTime } from "../utils/operations";

function Pad(){
    const { calExpressionString, setCalExpressionString } = useContext(CalExpressionContext);

    const calButtons = [
        [{id: 'btnClear', text: 'C'}, {id: 'btnRemoveOneDigit', text: 'R'}, {id: 'btnEquals', text: '='}, {id: 'btnDivide', text: '/'}],
        [{id: 'no7', text: '7'}, {id: 'no8', text: '8'}, {id: 'no9', text: '9'}, {id: 'btnMultiply', text: '*'}],
        [{id: 'no4', text: '4'}, {id: 'no5', text: '5'}, {id: 'no6', text: '6'}, {id: 'btnSubstraction', text: '-'}],
        [{id: 'no1', text: '1'}, {id: 'no2', text: '2'}, {id: 'no3', text: '3'}, {id: 'btnAddition', text: '+'}],
        [{id: 'no0', text: '0'}]
    ];

    const concatCalKeys = (calKey) => {
        if(calKey === '='){
            const result = operate(calExpressionString);
            setCalExpressionString(result);
            return;
        } else if (calKey.toUpperCase() === 'R') {
            const result = removeOneDigitAtTime(calExpressionString.toString());
            setCalExpressionString(result);
            return;
        } else if (calKey.toUpperCase() === 'C') {
            setCalExpressionString('');
            return;
        }
        setCalExpressionString(prev => prev + calKey);
    }

    return (
        <div className="mt-1">
            { 
                calButtons.map((buttonsRow) => {
                    return <div className='d-flex gap-2 mt-1'>
                        { 
                            buttonsRow.map((btn) => (
                                <CalButton 
                                    btnProp={btn} 
                                    key={btn.id}
                                    onClick={() => concatCalKeys(btn.text)}
                                />
                            ))
                        }
                    </div>
                })
            }
        </div>
    );
}

export default Pad;