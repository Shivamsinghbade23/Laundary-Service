import ImageData ,{service} from "../ImgImportar"
import "../component-style/registeredNav.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import Summary from "./Summary";
import Modal from "./Modal";

function ServiceList(){
        const [showSummary , setSummary] = useState(false);
        const [showModal , setModal] = useState(false);

        function modalData(value,modalvaluedata){
            setSummary(value)
            setModal(modalvaluedata)
            console.log("ji")
        }

    return(
        // <>         
        <>
             <div className="orderlist">
                <table cellspacing="0">
                        <thead>
                          <tr>
                            <th>Product Types</th>
                            <th>Quantity</th>
                            <th>Wash Type</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                                <div className="table-img">
                                <img src={ImageData[0]} alt="" />
                                </div>
                                <p className="table-content">Shirt</p>
                            </td>

                            <td className="input-number"><input type="number" /></td>
                            <td className="input-washtype">
                                <img src={service[0]} alt="" />
                                <img src={service[1]} alt="" />
                                <img src={service[2]} alt="" />
                                <img src={service[3]} alt="" />
                            </td>
                            <td>
                                <p className="calculation">10 * 5 = 50 </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                                <div className="table-img">
                                <img src={ImageData[1]} alt="" />
                                </div>
                                <p className="table-content">Woolen</p>
                            </td>

                            <td className="input-number"><input type="number" /></td>
                            <td className="input-washtype">
                                <img src={service[0]} alt="" />
                                <img src={service[1]} alt="" />
                                <img src={service[2]} alt="" />
                                <img src={service[3]} alt="" />
                            </td>
                            <td>
                                <p className="calculation">10 * 5 = 50 </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                                <div className="table-img">
                                <img src={ImageData[2]} alt="" />
                                </div>
                                <p className="table-content">T-Shirt</p>
                            </td>

                            <td className="input-number"><input type="number" /></td>
                            <td className="input-washtype">
                                <img src={service[0]} alt="" />
                                <img src={service[1]} alt="" />
                                <img src={service[2]} alt="" />
                                <img src={service[3]} alt="" />
                            </td>
                            <td>
                                <p className="calculation">10 * 5 = 50 </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                                <div className="table-img">
                                <img src={ImageData[3]} alt="" />
                                </div>
                                <p class="table-content">Coats</p>
                            </td>

                            <td className="input-number"><input type="number" /></td>
                            <td className="input-washtype">
                                <img src={service[0]} alt="" />
                                <img src={service[1]} alt="" />
                                <img src={service[2]} alt="" />
                                <img src={service[3]} alt="" />
                            </td>
                            <td>
                                <p className="calculation">10 * 5 = 50 </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                                <div className="table-img">
                                <img src={ImageData[4]} alt="" />
                                </div>
                                <p className="table-content">Paint</p>
                            </td>

                            <td className="input-number"><input type="number" /></td>
                            <td className="input-washtype" >
                                <img src={service[0]} alt="" />
                                <img src={service[1]} alt="" />
                                <img src={service[2]} alt="" />
                                <img src={service[3]} alt="" />
                            </td>
                            <td>
                                <p className="calculation">10 * 5 = 50 </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                                <div className="table-img">
                                <img src={ImageData[5]} alt="" />
                                </div>
                                <p class="table-content">Sweater</p>
                            </td>

                            <td className="input-number"><input type="number" /></td>
                            <td className="input-washtype">
                                <img src={service[0]} alt="" />
                                <img src={service[1]} alt="" />
                                <img src={service[2]} alt="" />
                                <img src={service[3]} alt="" />
                            </td>
                            <td>
                                <p className="calculation">10 * 5 = 50 </p>
                            </td>
                          </tr>
                          <tr>
                            <td> 
                                <div className="table-img">
                                <img src={ImageData[6]} alt="" />
                                </div>
                                <p className="table-content">Jeans</p>
                            </td>

                            <td className="input-number"><input type="number" /></td>
                            <td className="input-washtype">
                                <img src={service[0]} alt="" />
                                <img src={service[1]} alt="" />
                                <img src={service[2]} alt="" />
                                <img src={service[3]} alt="" />
                            </td>
                            <td>
                                <p className="calculation">10 * 5 = 50 </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="order-submit">
                          <Link to="/createproduct"> <button  className="create-btn">Cancel</button></Link>
                          <button className="proceed-btn" onClick={() => setSummary(true)}>Proceed</button>
                      </div>
                </div>
                    {showSummary ? <Summary modalData={modalData}/>:null}
                    { showModal ? <Modal /> : null}

        </>
    )
};

export default ServiceList