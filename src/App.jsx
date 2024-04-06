import React from "react";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import FirstDiv from "./components/firstDiv";
import SecondDiv from "./components/secondDiv";
import Content from "./components/content";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
