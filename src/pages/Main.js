import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Home";
import Counter from "./Counter";
import SignIn from "./SignIn";
import Homepage from "./Homepage";
import SignUp from "./SignUp";
import Resetpage1 from "./Resetpage1";
import Resetpage2 from "./Resetpage2";
import ListMovie from "./ListMovie";
import Details from "./Details";
import Booking from "./Booking";
import History from "./History";
import Payment from "./Payment";
import Profile from "./Profile";
import TicketUsed from "./TicketUsed";
import TicketExp from "./TicketExp";
import TicketActive from "./TicketActive";

import PrivateRoute from "../component/PrivateRoute";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/resetPage1" element={<Resetpage1 />} />
        <Route path="/resetPage2" element={<Resetpage2 />} />
        <Route path="/listMovie" element={<ListMovie />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="/booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/used"
          element={
            <PrivateRoute>
              <TicketUsed />
            </PrivateRoute>
          }
        />
        <Route
          path="/active"
          element={
            <PrivateRoute>
              <TicketActive />
            </PrivateRoute>
          }
        />
        <Route
          path="/expired"
          element={
            <PrivateRoute>
              <TicketExp />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
