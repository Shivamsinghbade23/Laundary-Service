import "../component-style/signin.css"
import { Link } from "react-router-dom"

function NavbarLogin(){
    return(
        <>
    <nav>
        <div className="logo"><p className="logo-text">LAUNDRY</p></div>
        <div className="nav-menu">
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Career</li>
                <li className="sign">Sign In</li>
            </ul>
        </div>
    </nav>   
        </>
    )
};

function Login(){
    return(
    <>
    <div className="login-container">
        <div className="login-card">
            <div className="banner-container">
                <h1>Laundry</h1>
                <h1>Service</h1>
                <p className="p-20">Doorstep Wash & Dryclean Service</p>
                <p className="p-16">Dont't Have An Account</p>
                <Link to="/register">
                 <button className="register"> Register</button>
                 </Link>
            </div>
        </div>
        <div className="login-form">
            <div className="login-form-wrapper">
                <h2>SIGN IN</h2>
                <form >
                    <label for="userid" className="login-title">Mobile / Email</label><br />
                    <input type="text" id="userid" className="input-field" /><br />
                    <br /><br />
                    <label for="useremail" className="login-title">Password</label><br/>
                    <input type="text" id="useremail" className="input-field" /><br/>
                    <p class="p-left">Forget Password?</p>
                    <br /><br /><br />
                    <Link to="/createproduct">
                    <input type="button" value="Sign In" className="submit-btn"/>
                    </Link>
                </form>
            </div>
        </div>
    </div>


</>
    )
};

function Footer(){
    return(
<>
    <footer>
        <hr className="hori-rule"/>
        <div className="refferal-card">
            <h3 className="refferal-text">
                Now Refer & Earn $500 for every referral
            </h3>
            <p className="extra-small">
                * Terms and conditions will be applied
            </p>
        </div>
        <div className="footer-banner">
            <div className="about-us">
                <p className="m-text">
                    ABOUT US
                </p>
                <p className="p-footer">Doorstep Wash & Dryclean Service</p>
            </div>
            <div className="navigation-bar">
                <p className="navigation-heading">Home</p>
                <p className="p-footer">Sign In</p>
                <p className="p-footer">Register</p>
            </div>
            <div className="navigation-bar">
                <p className="navigation-heading">Pricing</p>
            </div>
            <div className="navigation-bar">
                <p className="navigation-heading">Career</p>
                <p className="p-footer">Blogs</p>
                <p className="p-footer">Create</p>
            </div>
            <div class="navigation-bar">
                <p class="navigation-heading">Contact</p>
            </div>
            <div className="social-media">
                <p className="m-text">ABOUT US</p>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
            </div>

            <div className="circle">
                
            </div>
        </div>
    </footer>
</>
    )
};

export {Login , Footer}
export default NavbarLogin