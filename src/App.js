import React from "react";
import NavBar from "./component/Navbar/NavBar";
import Home from "./component/Home/Home";
import Team from "./component/Team/Team";
import Products from "./component/Products/Products";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Products />
      <Team />
      <Footer />
    </>
  );
}

export default App;
