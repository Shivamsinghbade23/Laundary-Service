import RegisteredNav ,{LeftNav , Create} from "./component/registeredNavbar"
import Copywrite from "./component/Copywrite"

function CreateService(){
    return(
        <>
            <RegisteredNav />
            <LeftNav />
            <Copywrite />
        </>
    )
}

export default CreateService