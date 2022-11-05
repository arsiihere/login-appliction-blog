import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({ type, placeholder, icon }) {
  return (
    <div className="form-group">
      <div className="icon d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={icon} />
      </div>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
