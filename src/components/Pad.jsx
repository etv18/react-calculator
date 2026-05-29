import { Container } from "react-bootstrap";
import CalButton from "./calButton";

function Pad(){
    const calButtons = [
        [{id: 'btnClear', text: 'C'}, {id: 'btnRemoveOneDigit', text: 'R'}, {id: 'btnDivide', text: '/'}],
        [{id: 'no7', text: '7'}, {id: 'no8', text: '8'}, {id: 'no9', text: '9'}, {id: 'btnMultiply', text: 'x'}],
        [{id: 'no4', text: '4'}, {id: 'no5', text: '5'}, {id: 'no6', text: '6'}, {id: 'btnSubstraction', text: '-'}],
        [{id: 'no1', text: '1'}, {id: 'no2', text: '2'}, {id: 'no3', text: '3'}, {id: 'btnAddition', text: '+'}],
        [{id: 'btnEquals', text: '='}]
    ];

    return (
        <Container className="mt-5">
            { calButtons.map((buttonsRow) => (
                    <div className="d-flex gap-2">
                        { buttonsRow.map((btn) => (
                            <CalButton btnProp={btn} key={btn.id}/>
                            ))
                        }
                    </div>
                ))
            }
        </Container>
    );
}

export default Pad;