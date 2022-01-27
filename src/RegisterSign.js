import { Routes , Route} from "react-router-dom";
import Register from "./component/Register";
import NavbarLogin , { Login, Footer }   from "./component/Singin";
import Copywrite from "./component/Copywrite";
import { useState } from "react";

function RegisterSign(){

    const [loginShow , setLoginShow] = useState(true);

    return(
        <>
            <NavbarLogin />

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path = "/register" element={<Register />} />
            </Routes>

            <Footer />
            <Copywrite />
        </>
    )
}

export default RegisterSign