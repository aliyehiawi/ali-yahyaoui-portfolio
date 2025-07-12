import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Background3D from "./components/Background3D";
import AnimatedContactSection from "./components/AnimatedContactSection";

function App() {
  return (
    <Layout>
      <Background3D />
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <AnimatedContactSection />
    </Layout>
  );
}

export default App;
