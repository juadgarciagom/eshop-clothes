import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import '../sign/sign-page.scss'

const SignPage = () => {
    return <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>;
};

export default SignPage;
