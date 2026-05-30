import { useState } from 'react';

import Pad from './Pad';
import ResultWindow from './ResultWindow';
import { CalExpressionContext } from '../context/CalExpressionContext';

function Calculator(){
    const [calExpressionString, setCalExpressionString ] = useState('');

    return (
        <CalExpressionContext.Provider value={{ calExpressionString, setCalExpressionString }}>
            <ResultWindow></ResultWindow>
            <Pad></Pad>
      </CalExpressionContext.Provider>
    );
}

export default Calculator;