import "../component-style/orderedlist.css"
import SummaryDetailed from "./SummaryDetailed"
import {useState} from "react"
import Alert from "./Alert"
function Orderedlist(){
    const [showSummary , setSummary] = useState(false)
    const [showAlert,setAlert] = useState(false)
    function SummaryLiftup(value){
        setSummary(value)
    }
    function AlertLiftup(value){
        setAlert(value)
    }
    return(
        <>
        {showAlert ? <Alert AlertLiftup={AlertLiftup}/>:null}    
        {showSummary ? <SummaryDetailed SummaryLiftup = {SummaryLiftup}/> : null}
                <div className="orderlist">
                    <table cellspacing="0">
                        <thead>
                          <tr>
                            <th>Order Id</th>
                            <th>Order Date & Time</th>
                            <th>Store Location</th>
                            <th>City</th>
                            <th>Store Phone</th>
                            <th>Total items</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>View</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0RCD12</td>
                                <td>10 0ct 2021, 10:55</td>
                                <td>Gorakhpur</td>
                                <td>Gorakhpur</td>
                                <td>+91 8171573301</td>
                                <td>10</td>
                                <td>480rs</td>
                                <td onClick={() => setAlert(true)}>Cancelled</td>
                                <td><i className="fas fa-eye" onClick={() => setSummary(true)}></i></td>
                            </tr>
                        </tbody>

                    </table>
                    
                </div>   
        </>
    )
};

export default Orderedlist