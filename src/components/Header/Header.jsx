import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { LogOut } from "../../firbase";

function Header() {
  const dispatch = useDispatch();
  const [userEmail] = useState(() => window.localStorage.getItem("userEmail"));
  return (
    <header className="d-flex space-between header">
      <div>
        <p>Arslan Demo Application</p>
      </div>
      <div>
        <p>Welcome! {userEmail}</p>
      </div>
      <div>
        <p
          className="btn"
          onClick={() => {
            LogOut();
            dispatch(uiActions.userStatus({ staus: false }));
          }}
        >
          LogOut
        </p>
      </div>
    </header>
  );
}

export default Header;
