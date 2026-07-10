import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
