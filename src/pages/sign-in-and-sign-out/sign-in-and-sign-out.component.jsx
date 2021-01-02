import React from "react";

import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-out.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
