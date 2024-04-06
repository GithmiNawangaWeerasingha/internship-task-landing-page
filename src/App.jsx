import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
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
