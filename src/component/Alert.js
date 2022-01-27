import "../component-style/alert.css"


function Alert(props){
    return(
        <>
    <div className="alert-parent">
        <div className="alert">
            <div className="alert-banner">
                <p>Alert</p>
                <p> X </p>
            </div>
            <div className="alert-content">
                    <div className="alert-sign">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <p>
                        Are you sure want to cancel the <br /> order No: OR1213
                    </p>
                    <button onClick={() => props.AlertLiftup(false)}>Proceed</button>
            </div>
        </div>
    </div>
        </>
    )
};
export default Alert