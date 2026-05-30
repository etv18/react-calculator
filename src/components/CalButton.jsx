import '../css/CalButton.css';

function CalButton({btnProp, onClick}){
    return <button 
            id={btnProp.id} 
            className="cal-button"
            onClick={onClick}
        >
            {btnProp.text}
        </button>
}

export default CalButton;