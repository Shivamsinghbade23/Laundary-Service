import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarLogin from "./component/Singin";
import CreateService from "./CreateService";
import RegisterSign from "./RegisterSign";


function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<RegisterSign />} />
          <Route path = "/createproduct/*" element = {<CreateService />} />
        </Routes>    
      </Router>
    </>
  )
};
export default App