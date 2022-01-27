import { Link } from "react-router-dom"
import "../component-style/summarydetail.css"

function SummaryDetailed(props){
    return(
        <>
    <div className="summary-container-d">
        <div className="shade-d">

        </div>
        <div className="summary-d">
            <div className="summary-nav-d">
                <p>Summary</p>
                <div className="cross-d">
                    <span className="close-d"> </span>
                    <span className="right-d"> </span>
                </div>
            </div>
            <div className="address-bar-d">
                <input type="text" value="Gorakhpur U.P" className="search-address-d"/>
                <p>Store Address</p>
                <p>Phone</p>
            </div>
            <div className="ordered-status-d">
                <p><i className="far fa-circle"></i>Picked up--------------<i className="far fa-circle"></i>Washed----------------<i className="far fa-circle"></i>Ironed----------------<i className="far fa-circle"></i>Delivered</p>
            </div>
            <div className="order-detail-d">
                <p>Order Details</p>
                <div className="detail-list-d">
                    <p>Shirt</p>
                    <p>Washing , Ironing</p>
                    <p>5 * 20 = </p>
                    <p>100</p>
                </div>
                <div className="detail-list-d">
                    <p>Shirt</p>
                    <p>Washing , Ironing</p>
                    <p>5 * 20 = </p>
                    <p>100</p>
                </div>
                <div className="detail-list-d">
                    <p>Shirt</p>
                    <p>Washing , Ironing</p>
                    <p>5 * 20 = </p>
                    <p>100</p>
                </div>
                <div className="sub-total-d">
                    <p>Sub total: 450</p> <br />
                    <p>Pickup Charges : 90</p>
                </div>
            </div>

            <div className="total-detail-d">
                
            </div>
            <br />
            <div className="total-d">
                <p>Total : 90</p>
            </div>
            
            <div className="address-d">
                <p>Address</p>
                <br />
              <div className="address-flex-d">
                <div className="address-box-d">
                    <p>Home</p>
                    <p>#223, 10th road , Jp Nagar,Bangalore</p>
                </div>
                <div className="address-box-d">
                    <p>Home</p>
                    <p>#223, 10th road , Jp Nagar,Bangalore</p>
                </div>
              </div>
            </div>

            <div className="confirm-bar-d">
               <button onClick={() =>props.SummaryLiftup(false)}>Cancel</button>
            </div>

        </div>
    </div>
        </>
    )
};

export default SummaryDetailed