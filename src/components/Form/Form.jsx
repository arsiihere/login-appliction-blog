import React from "react";
import Input from "../Input/Input";

function Form() {
  return (
    <form>
      <Input type="text" placeholder="Username" icon="fa-solid fa-user" />
      <Input type="password" placeholder="Password" icon="fa-solid fa-user" />
      <div className="form-group d-md-flex">
        <div className="w-100 text-md-right">
          <a>Forgot Password</a>
        </div>
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn form-control btn-primary rounded submit px-3"
        >
          Get Started
        </button>
      </div>
      <div className="w-100 text-center mt-4 text">
        <p className="mb-0">Don't have an account?</p>
        <a> Sign Up </a>
      </div>
    </form>
  );
}

export default Form;
