import "../component-style/modal.css"
import {Link } from "react-router-dom"


function Modal(){
    return(
        <>
    <div className="modal-parent">
        <div className="modal">
            <i className="far fa-check-circle"></i> 
            <p className="modal-heading">Your order is <br /> successfully Placed</p>

            <p className="modal-content">You can track the delivery in the <br /> "Orders" section</p>

            <Link to="/createproduct/Ordered"> <button className="modal-btn">Go to orders</button></Link>
        </div>
    </div>
        </>
    )
}
export default Modal