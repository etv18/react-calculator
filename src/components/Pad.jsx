import CalButton from "./CalButton";

function Pad(){
    const calButtons = [
        [{id: 'btnClear', text: 'C'}, {id: 'btnRemoveOneDigit', text: 'R'}, {id: 'btnEquals', text: '='}, {id: 'btnDivide', text: '/'}],
        [{id: 'no7', text: '7'}, {id: 'no8', text: '8'}, {id: 'no9', text: '9'}, {id: 'btnMultiply', text: 'x'}],
        [{id: 'no4', text: '4'}, {id: 'no5', text: '5'}, {id: 'no6', text: '6'}, {id: 'btnSubstraction', text: '-'}],
        [{id: 'no1', text: '1'}, {id: 'no2', text: '2'}, {id: 'no3', text: '3'}, {id: 'btnAddition', text: '+'}],
        [{id: 'no0', text: '0'}]
    ];
    let c = 0;
    return (
        <div className="mt-1">
            { 
                calButtons.map((buttonsRow) => {
                    c++
                    let rowClass = 'd-flex gap-2 mt-1';
                    return <div className={ c === 1 ? rowClass  : rowClass}>
                        { 
                            buttonsRow.map((btn) => (
                                <CalButton btnProp={btn} key={btn.id}/>
                            ))
                        }
                    </div>
                })
            }
        </div>
    );
}

export default Pad;