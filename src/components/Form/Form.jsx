import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { SignUp, Login } from "../../firbase";
import Input from "../Input/Input";

function Form() {
  const [isLodaing, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState({
    hasError: false,
    message: "",
  });
  const uiItems = useSelector((state) => {
    return state.ui;
  });
  const dispatch = useDispatch();
  const setUserName = (username) => {
    dispatch(uiActions.setUserName({ username }));
  };
  const setPassword = (password) => {
    dispatch(uiActions.setPassword({ password }));
  };

  async function handleSignUp(e) {
    setIsLoading(true);
    e.preventDefault();
    let response;
    if (uiItems.hasAccount) {
      try {
        response = await Login(uiItems.username, uiItems.password);
        window.localStorage.setItem("userEmail", response.user.email);
        dispatch(uiActions.userStatus({ status: true }));
      } catch (error) {
        setErrorState({
          hasError: true,
          message: error,
        });
      }
      setIsLoading(false);
    } else {
      try {
        response = await SignUp(uiItems.username, uiItems.password);
        window.localStorage.setItem("userEmail", response.user.email);
        dispatch(uiActions.userStatus({ status: true }));
      } catch (error) {
        setErrorState({
          hasError: true,
          message: error,
        });
      }
      setIsLoading(false);
    }
  }
  return (
    <form>
      <Input
        type="text"
        placeholder="Username"
        upLiftInputValue={setUserName}
      />
      <Input
        type="password"
        placeholder="Password"
        upLiftInputValue={setPassword}
      />
      <div className="form-group d-md-flex">
        {!uiItems.hasAccount && (
          <div className="w-100 text-md-right">
            <a>Forgot Password</a>
          </div>
        )}
      </div>
      <div className="form-group">
        <button
          disabled={isLodaing}
          type="submit"
          className="btn form-control btn-primary rounded submit px-3"
          onClick={handleSignUp}
        >
          Get Started
        </button>
      </div>
      <div className="w-100 text-center mt-4 text">
        <p className="mb-0">
          {!uiItems.hasAccount
            ? "Already Have Account?"
            : "Don't have an account?"}
        </p>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(uiActions.toggle());
          }}
        >
          {!uiItems.hasAccount ? "Log In" : "Sign Up"}{" "}
        </a>
      </div>
      {isLodaing && <p>Loading</p>}
      {!isLodaing && errorState.hasError && <p>{errorState.message.message}</p>}
    </form>
  );
}

export default Form;
