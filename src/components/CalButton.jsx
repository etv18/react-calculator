import '../css/CalButton.css';

function CalButton({btnProp}){
    return <button id={btnProp.id} className="cal-button">{btnProp.text}</button>
}

export default CalButton;