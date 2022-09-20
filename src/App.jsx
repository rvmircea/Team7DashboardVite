import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MainHeader from "./components/MainHeader";
import ErrorPage from "./components/ErrorPage";
const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <MainHeader loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
          <Route path="/error" element={<ErrorPage setLoggedIn={setLoggedIn}/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
