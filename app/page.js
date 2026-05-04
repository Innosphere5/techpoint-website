
import React from "react";
import Home from "./home/Home";
import Features from "./features/page";
import Course from "./Course/page"
import About from "./about/page"
import Contact from "./contact/page"
import Footer from "./components/Footer/footer";

const Page = () => {
  return (
    <main>
      <Home />
      <Features />
      <Course />                      
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Page;
