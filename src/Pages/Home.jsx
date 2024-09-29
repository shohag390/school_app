import React from "react";
import Banner from "./Banner";
import About from "../Components/About/About";
import Courses from "../Components/Courses/Courses";
import FactArea from "./FactArea";
import Blog from "../Components/Blog/Blog";
import Sponser from "./Sponser";
import Pricing from "./Pricing";
import Instructor from "./Instructor";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponser />
      <About />
      <Courses />
      <FactArea />
      <Pricing />
      <Instructor />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Home;
