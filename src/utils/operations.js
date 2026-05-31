export const operations = ['+', '-', '/', '*']

export function operate(calExpression){
    const operations = ['+', '-', '/', '*'];
    let symbol = '';
    let result;
    
    for (const op of operations) {
        if(calExpression.includes(op)){
            symbol = op;
            break;
        }
    }

    if(symbol === '') {
        result = 'Invalid Operation';
        return
    }
    
    const values = calExpression.split(symbol);
    const v0 = Number(values[0]);
    const v1 = Number(values[1]);
    
    switch(symbol) {
        case '+':
            result = v0 + v1;
            break;
        case '-':
            result = v0 - v1;
            break;
        case '*':
            result = v0 * v1;
            break;
        case '/':
            if(v1 === 0) {
                result = 'Invalid operation, Zero division error';
                break;
            }
            result = v0 / v1;
            break;
        default:
            result = 'Unknown Operation';
            break
    }

    return result;
}

export function removeOneDigitAtTime(calExpression){
    return calExpression.slice(0, -1);
}
