import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { SignUp } from "../../firbase";
import Input from "../Input/Input";

function Form() {
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
    e.preventDefault();
    await SignUp(uiItems.username, uiItems.password);
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
            ? "Don't have an account?"
            : "Already Have Account ?"}
        </p>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(uiActions.toggle());
          }}
        >
          {uiItems.hasAccount ? "Log In" : "Sign Up"}{" "}
        </a>
      </div>
    </form>
  );
}

export default Form;
