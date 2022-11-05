import React from "react";
import Form from "../Form/Form";
import { LoginWrapper } from "../Wrapper";

function FormCard() {
  return (
    <LoginWrapper>
      <h3 className="text-center mb-0">Welcome</h3>
      <p className="text-center">Sign in by entering the information below</p>
      <Form />
    </LoginWrapper>
  );
}

export default FormCard;
