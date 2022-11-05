import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
const auth = getAuth();
function useAuth() {
  const [currUser, setCurrUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrUser(user));
    return unsub;
  }, []);
  return currUser;
}

export default useAuth;
