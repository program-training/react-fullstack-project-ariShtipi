import Home from "./compenntos/Home/Home";
import Trips from "./compenntos/Trips/Trips";
import UserRegistration from "./compenntos/UserRegistration/UserRegistration";
import UserLogin from "./compenntos/UserLogin/UserLogin";
import Navigation from "./compenntos/Navigation/Navigation";
import NewTripForm from "./compenntos/NewTripForm/NewTripForm";
import TripDetail from "./compenntos/TripDetail/TripDetail";
import UpdateTripForm from "./compenntos/UpdateTripForm/UpdateTripForm";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

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
          <Route path="/NewTripForm" element={<NewTripForm />} />
          <Route path="/TripDetail/:id" element={<TripDetail />} />
          <Route path="/UpdateTripForm/:id" element={<UpdateTripForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
