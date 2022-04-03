import { useParams } from "react-router-dom";

import UserInfo from "./UserInfo";
import Stepper from "../components/Stepper";

const Payment = () => {
    // const param = useParams();
    return (
        <div className='payment_container'>
            <div>
                <Stepper />
            </div>
            <div className='payment_user_info'>
                <UserInfo />
            </div>
        </div>
    );
};

export default Payment;
