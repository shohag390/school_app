import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Routing from "../Routes/Routing";
import Footer from "../Components/Footer/Footer";
import Newslatter from "../Pages/Newslatter";
import GoTop from "../Components/GoTop/GoTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <GoTop />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
