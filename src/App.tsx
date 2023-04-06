import React from "react";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import NavbarScroll from "./components/navbar";

function App() {
  return (
    <section className="App">
      <NavbarScroll />
      <main className="main">
        {/* <Routes>
          <Route />
        </Routes> */}
      </main>
    </section>
  );
}

export default App;
