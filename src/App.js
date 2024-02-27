import React from "react";
import { ThemeProvider } from "./theme";
import Nav, { ThemeIco } from "./routes/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./screens/contacts";
import Home from "./screens/home";
import Events from "./screens/events";
import Team from "./screens/team";
import { Login } from "./adminScreens";
import BgParticle from "./BgParticle";
import "./App.css"

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <div className="app-container flex flex-col">
            <Nav />
            <ThemeIco />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
          <BgParticle />
        </ThemeProvider>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;