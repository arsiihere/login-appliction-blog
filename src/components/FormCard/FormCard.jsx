import React from "react";
import Form from "../Form/Form";
import { LoginWrapper } from "../Wrapper";
import useAuth from "../../hooks/useAuth";

function FormCard() {
  const currUserDetail = useAuth();
  console.log(currUserDetail, "checking the data");
  return (
    <LoginWrapper>
      <h3 className="text-center mb-0">Welcome</h3>
      <p className="text-center">Sign in by entering the information below</p>
      <Form />
    </LoginWrapper>
  );
}

export default FormCard;
