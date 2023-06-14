import "./App.css";
import Home from "./pages/home/Home";
import ProfilePage from "./pages/profile/ProfilePage";
import { Routes, Route } from "react-router-dom";
import webIllust from "./assets/webillust.jpeg";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route
        path={"/profile"}
        element={<ProfilePage image={webIllust} alt={"card_img"} />}
      />
    </Routes>
  );
}

export default App;
