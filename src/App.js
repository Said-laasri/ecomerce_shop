import React from "react";
import ResponsiveAppBar from "./component/Navbar/NavBar";
import Home from "./component/Home/Home";
import Team from "./component/Team/Team";
import Products from "./component/Products/Products";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Team />
      <Products />
      <Footer />
      <Home />
    </>
  );
}

export default App;
