import "../component-style/register.css"
import { Link } from "react-router-dom"
function Register(){
    return(
        <>

        <div className="register-component">
        <div className="register-side-bar">
            <div className="register-text-content"> 
                <h1>Laundary</h1>
                <h1>Service</h1>
                <p className="p-20">Doorstep Wash & <br /> Dryclean Service</p>
            </div>
            <div className="register-signin-content">
                <p className="p-16">Already Have Account</p>
               <Link to="/"> 
               <button className="register">Sign In</button>
                </Link>
            </div>
        </div>

        <div className="register-form">
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="Name" className="registraion-input"/> 
                <input type="email" placeholder="Email" className="registraion-input"/> <br />
                <input type="password" placeholder="Password"  className="registraion-input"/> 
                <input type="number" placeholder="Phone Number"  className="registraion-input"/> <br />
                <input type="text" placeholder="State"  className="registraion-input"/> 
                <input type="text" placeholder="District"  className="registraion-input"/> <br />
                <input type="text" placeholder="Address"  className="registraion-input"/>
                 <input type="number" placeholder="Pincode"  className="registraion-input"/> <br />
                
                <div className="checkbox-container">
                    <input type="checkbox" className="checkbox"/> <span>I agree to Terms & Condition receiving marketing and promotional materials</span><br />

                    <input type="submit" className="submit-btn" value="Register" />
                </div>

            </form>
        </div>
    </div>

    </>
    )
};

export default Register
