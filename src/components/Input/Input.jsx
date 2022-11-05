import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({ type, placeholder, icon, upLiftInputValue }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="form-group">
      <div className="icon d-flex align-items-center justify-content-center">
        {/* <FontAwesomeIcon icon={icon} /> */}
      </div>
      <input
        className="form-control"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          upLiftInputValue(e.target.value);
        }}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
