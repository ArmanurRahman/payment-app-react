import { useParams } from "react-router-dom";
import { useState } from "react";

import Stepper from "../components/Stepper";
import Input from "../components/Input";
import Button from "../components/button";

const Payment = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [activeStep, setActiveStep] = useState(1);

    const nextHandler = () => {
        setActiveStep(2);
    };
    const prevHandler = () => {
        setActiveStep(1);
    };
    // const param = useParams();
    return (
        <div className='payment_container'>
            <div>
                <Stepper activeStep={activeStep} />
            </div>
            <div className='payment_user_info'>
                {activeStep === 1 ? (
                    <div className='userInfo_container'>
                        <div className='userInfo_name'>
                            {" "}
                            <Input
                                label='First Name'
                                id='firstName'
                                value={firstName}
                                onChange={(event) =>
                                    setFirstName(event.target.value)
                                }
                            />{" "}
                            <Input
                                label='Last Name'
                                id='firstName'
                                value={lastName}
                                onChange={(event) =>
                                    setLastName(event.target.value)
                                }
                            />
                        </div>
                        <Input
                            label='Email'
                            id='email'
                            type='email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <div className='userInfo_btn'>
                            <Button
                                label={"Next"}
                                className='btn-primary'
                                onClick={nextHandler}
                            />
                        </div>
                    </div>
                ) : (
                    <div className='card_container'>
                        <Input label={"Card Number"} />
                        <Input label={"Card Holder Name"} />
                        <div className='card_info'>
                            <Input label={"Expire Date"} type='date' />
                            <Input label={"CVV Code"} />
                        </div>
                        <div className='card_btn'>
                            <Button
                                label={"Prev"}
                                className='btn-primary'
                                onClick={prevHandler}
                            />
                            <Button
                                label={"Purchase"}
                                className='btn-primary'
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Payment;
