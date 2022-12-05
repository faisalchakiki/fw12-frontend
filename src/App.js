import {BrowserRouter,Routes,Route,} from "react-router-dom";
import '../src/asset/css/style.css';
import React from "react";

import Home from "./pages/Home";
import Counter from "./pages/Counter";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";

function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/homepage" element={<Homepage />}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App;
