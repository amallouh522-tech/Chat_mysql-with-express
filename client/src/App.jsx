import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/SignUP" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
