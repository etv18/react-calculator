import { useState } from 'react';

import Pad from './Pad';
import ResultWindow from './ResultWindow';
import { CalExpressionContext } from '../context/CalExpressionContext';

function Calculator(){
    const [calExpressionString, setCalExpressionString ] = useState('');

    return (
        <CalExpressionContext.Provider value={{ calExpressionString, setCalExpressionString }}>
            <div className="container mt-1" style={{width: '200px'}}>
                    <ResultWindow></ResultWindow>
                    <Pad></Pad>
            </div>
      </CalExpressionContext.Provider>
    );
}

export default Calculator;