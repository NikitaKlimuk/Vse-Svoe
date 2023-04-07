import React from "react";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.scss";
import NavbarScroll from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <section className="App">
      <NavbarScroll />
      <main className="main">
        {/* <Routes>
          <Route />
        </Routes> */}
      </main>
      <Footer />
    </section>
  );
}

export default App;
