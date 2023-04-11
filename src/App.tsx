import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.scss";
import NavbarScroll from "./components/navbar";
import Footer from "./components/footer";
import MainPage from "./pages/mainPage";

const App = () => {
  return (
    <section className="App">
      <NavbarScroll />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
};

export default App;
