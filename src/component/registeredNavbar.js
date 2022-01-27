// import { useState } from "react"
import "../component-style/registeredNav.css"
import ServiceList from "../component/Service"
import { Link, Route , Routes } from "react-router-dom"
import Orderedlist from "./OrderedList"

function RegisteredNav(){

    return(
     <>
    <nav className="nav-signed">
        <div className="logo"><p className="logo-text">LAUNDRY</p></div>
        <div className="nav-menu">
            <ul>
                <li>Pricing</li>
                <li>Career</li>
                <li className="reg-sign"> <span className="user-block"></span> User Name </li>
            </ul>
        </div>
    </nav>
     </>   
    )
};
function LeftNav(){
    // const [orderShow , setOrderShow] = useState(true);
    
    return(
        <>
        <div className="order-wrapper">
        <div className="left-menu">
            <i className="fas fa-home"></i> <br />
            <i className="fas fa-plus-circle"></i> <br />
            <i className="fas fa-list"></i>

        </div>
        <div className="order-container">
                <div className="order-nav">
                    <h4>Orders | 0</h4>
                    <input type="text" className="search-option" placeholder="Search"/>
                </div>
                 <Routes>
                     <Route path = "/" element = {<Create />}/>
                     <Route path = "/Service" element = {<ServiceList />}/>
                     <Route path = "/Ordered" element={<Orderedlist />} />
                 </Routes> 
                
        </div>
    </div>
        </>
    )
};

function Create(){
    return(
        <>
            <div className="create-order">
                    <p className="p-16">No Orders avilable</p>
                    <Link to="/createproduct/Service"> <button className="create-btn">Create</button> </Link>
                </div>
        </>
    )

};
export default RegisteredNav
export {LeftNav , Create}

