import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

import Courses from "../components/Courses-section/Courses";
import FreeCourse from "../components/Free-course-section/FreeCourse";


const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Courses />
      <FreeCourse />
    </Fragment>
  );
};

export default Home;
