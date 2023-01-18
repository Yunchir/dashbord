import React from "react";
// import User from "./usersBrowser/components/User";
// import Dashboard from "./mainDashboard/Dashboard";
import Header from "./usersBrowser/components/Header";
import Main from "./usersBrowser/components/Main";
import Footer from "./usersBrowser/components/Footer";

function App() {
  return (
    <div className="app container">
      {/* <User /> */}
      {/* <Dashboard /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
