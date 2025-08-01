import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Background3D from "./components/Background3D";
import AnimatedContactSection from "./components/AnimatedContactSection";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Background3D />
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <AnimatedContactSection />
        <ScrollToTop />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
