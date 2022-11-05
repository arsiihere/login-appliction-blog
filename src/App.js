import { useEffect } from "react";
import SignUp from "./pages/SignUp";
import Header from "./components/Header/Header";
import ShowPost from "./pages/ShowPost";

function App() {
  async function fetchData() {
    await fetch(
      "https://newloginproject-ce331-default-rtdb.firebaseio.com/posts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "HERE IS DATA");
      })
      .catch((err) => {
        console.log(err, "here it is");
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <SignUp />
      <ShowPost />
    </div>
  );
}

export default App;
