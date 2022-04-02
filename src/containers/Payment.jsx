import { useParams } from "react-router-dom";

const Payment = () => {
    const param = useParams();
    return <div>{param.planId}</div>;
};

export default Payment;
