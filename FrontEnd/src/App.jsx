import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SingUp/SingUp";
import UserProfile from "./pages/UserProfile/UserProfile";
import Cart from "./pages/Cart/Cart";
import PrivateRoute from "./utils/PrivateRoute";
import Clientes from "./pages/Clientes/Clientes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route
          element={
            <PrivateRoute
              onlylogged={true}
              allowedRoles={["admin", "cliente"]}
            />
          }
        >
          <Route path="/userProfile" element={<UserProfile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route element={
            <PrivateRoute
              onlylogged={true}
              allowedRoles={["admin"]}
            />
          }>
          <Route path="/clientes" element={<Clientes />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
