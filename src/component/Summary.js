
import { useState } from "react"
import "../component-style/summary.css"
import Modal from "../component/Modal";

function Summary(props){
    return(
        <>
        
        <div className="summary-container">
        <div className="shade">

        </div>
        <div className="summary">
            <div className="summary-navbar">
                <p>Summary</p>
                <div className="cross">
                    <span className="close"> </span>
                    <span className="right"> </span>
                </div>
            </div>
            <div className="address-bar">
                <input type="text" value="Gorakhpur U.P" className="search-address"/>
                <p>Store Address</p>
                <p>Phone</p>
            </div>
            <div className="order-detail">
                <p>Order Details</p>
                <div className="detail-list">
                    <p>Shirt</p>
                    <p>Washing , Ironing</p>
                    <p>5 * 20 = </p>
                    <p>100</p>
                </div>
                <div className="detail-list">
                    <p>Shirt</p>
                    <p>Washing , Ironing</p>
                    <p>5 * 20 = </p>
                    <p>100</p>
                </div>
                <div className="detail-list">
                    <p>Shirt</p>
                    <p>Washing , Ironing</p>
                    <p>5 * 20 = </p>
                    <p>100</p>
                </div>
                <div className="sub-total"><p>Sub total: 450</p></div>
            </div>

            <div className="total-detail">
                <p>Pickup Charges : 90</p>
            </div>
            <br />
            <div className="total">
                <p>Total : 90</p>
            </div>
            
            <div className="address">
                <p>Address</p>
                <br />
              <div className="address-flex">
                <div className="address-box">
                    <p>Home</p>
                    <p>#223, 10th road , Jp Nagar,Bangalore</p>
                </div>
                <div className="address-box">
                    <p>Home</p>
                    <p>#223, 10th road , Jp Nagar,Bangalore</p>
                </div>
                <p className="Add-section">Add New</p>
              </div>
            </div>

            <div className="confirm-bar">
                <button onClick={() => props.modalData(false,true)}>Confirm</button>
            </div>
        </div>
    </div>  
    
        </>
    )
}
export default Summary