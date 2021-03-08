import React from "react";
import Navbar1 from "./components/Navbar1";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";

const App = (props) => {
  return (
    <div className="app-frame">
      <Navbar1 />
      <Header />
      <ProjectList projects={props.data} />
      <Footer />
    </div>
  );
};

export default App;
