import { useParams } from "react-router-dom";

import UserInfo from "./UserInfo";

const Payment = () => {
    const param = useParams();
    return (
        <div className='payment_container'>
            {param.planId}
            <UserInfo />
        </div>
    );
};

export default Payment;
