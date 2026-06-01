import '../css/CalButton.css';

function CalButton({btnProp, onClick}){
    return <button 
            id={btnProp.id} 
            className="btn btn-secondary"
            onClick={onClick}
        >
            {btnProp.text}
        </button>
}

export default CalButton;