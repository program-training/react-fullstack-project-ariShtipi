import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./compenntos/Home/Home";
import Trips from "./compenntos/Trips/Trips";
import  UserRegistration  from "./compenntos/UserRegistration/UserRegistration";
import  UserLogin  from "./compenntos/UserLogin/UserLogin";
import Navigation from "./compenntos/Navigation/Navigation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/registration" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
