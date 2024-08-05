import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="font-secondary bg-DarkBlue2  hover:animate">
      <Navbar />
      <Hero />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
