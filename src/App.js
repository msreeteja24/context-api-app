import "./App.css";
import BlogPage from "./components/BlogPage";
import { useContext } from "react";
import UserInfoContext from "./context/UserInfoContext";

function App() {
  const userInfo = { user: "Admin", isAdmin: "true" };
  return (
    <div className="App">
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
