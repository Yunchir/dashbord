import React from "react";
// import User from "./usersBrowser/components/User";
// import Dashboard from "./mainDashboard/Dashboard";
import Header from "./usersBrowser/components/Header";
import Main from "./usersBrowser/components/Main";
import Footer from "./usersBrowser/components/Footer";
import SignIn from "./usersBrowser/components/SignIn";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../src/usersBrowser/components/Main/ProductPage";

function App() {
  const [signIn, setSignIn] = useState();

  return (
    <div className="app container">
      {/* <User /> */}
      {/* <Dashboard /> */}
      <Header setSign={setSignIn} />
      {signIn ? <SignIn sign={setSignIn} /> : null}

      <Routes>
        <Route path="/Page/:id" element={<ProductPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
