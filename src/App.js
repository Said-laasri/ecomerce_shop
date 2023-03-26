import React from "react";
import ResponsiveAppBar from "./component/Navbar/NavBar";
import Home from "./component/Home/Home";
import Team from "./component/Team/Team";
import Products from "./component/Products/Products";
import Footer from "./component/Footer/Footer";
// import Nav from "./component/Navbar/nav";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <ResponsiveAppBar />
      <Team />
      <Products />
      <Footer />
      <Home />
    </>
  );
}

export default App;
