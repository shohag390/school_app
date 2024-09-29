import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Routing from "../Routes/Routing";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
