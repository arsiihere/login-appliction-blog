import { useEffect } from "react";
import SignUp from "./pages/SignUp";
import Header from "./components/Header/Header";
import ShowPost from "./pages/ShowPost";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const userLoginStatus = useSelector((state) => state.ui.isLogin);
  return (
    <div className="App">
      {!userLoginStatus && <SignUp />}
      {userLoginStatus && (
        <>
          <Header />
          <ShowPost />
        </>
      )}
    </div>
  );
}

export default App;
