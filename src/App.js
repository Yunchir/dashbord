import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideMenu from "./pages/SideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <SideMenu />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
