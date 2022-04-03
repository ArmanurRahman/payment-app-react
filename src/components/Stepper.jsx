import { AiOutlineCheck } from "react-icons/ai";
import React, { useState } from "react";

const Stepper = () => {
    const steps = [
        {
            number: 1,
            label: "Contact",
        },
        {
            number: 2,
            label: "Payment",
        },
    ];

    const activeStep = useState(2)[0];
    return (
        <div className='stepper_container'>
            {steps.map((item, index) => (
                <div
                    key={item.number}
                    className='stepper_edge'
                    style={{
                        width:
                            index < steps.length - 1
                                ? 98 / steps.length + "%"
                                : "30px",
                    }}
                >
                    <div className='step'>
                        <div
                            className={`step-number ${
                                item.number === activeStep ? "active" : ""
                            }`}
                        >
                            {item.number < activeStep ? (
                                <AiOutlineCheck className='icon success' />
                            ) : (
                                item.number
                            )}
                        </div>
                        <div className='step-label'>{item.label}</div>
                    </div>
                    {index < steps.length - 1 && <div className='edge'></div>}
                </div>
            ))}
        </div>
    );
};

export default Stepper;
