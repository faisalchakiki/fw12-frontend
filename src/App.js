import {BrowserRouter,Routes,Route,} from "react-router-dom";
import '../src/asset/css/style.css';
import React from "react";

// import Home from "./pages/Home";
// import Counter from "./pages/Counter";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Resetpage1 from "./pages/Resetpage1";
import Resetpage2 from "./pages/Resetpage2";
import ListMovie from "./pages/ListMovie";

function App() {
  return(
  <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />}/> */}
        <Route path="/" element={<Homepage />}/>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/resetPage1" element={<Resetpage1 />}/>
        <Route path="/resetPage2" element={<Resetpage2 />}/>
        <Route path="/listMovie" element={<ListMovie />}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App;
