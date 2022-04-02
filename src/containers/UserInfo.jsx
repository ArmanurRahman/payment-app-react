import { useState } from "react";
import Button from "../components/button";

import Input from "../components/Input";
const UserInfo = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div className='userInfo_container'>
            <div className='userInfo_name'>
                {" "}
                <Input
                    label='First Name'
                    id='firstName'
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />{" "}
                <Input
                    label='Last Name'
                    id='firstName'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
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
                <Button label={"Next"} className='btn-primary' />
            </div>
        </div>
    );
};

export default UserInfo;
