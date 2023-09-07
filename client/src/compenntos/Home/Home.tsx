import { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navigateToRegistration = () => {
    setShowRegistration(!showRegistration);
    setShowLogin(false);
  };

  const navigateToLogin = () => {
    setShowRegistration(false);
    setShowLogin(!showLogin);
  };

  return (
    <div className="countyner">
      <h1>Home</h1>
      <Link to="/trips">
        <button>Click to go to all trips</button>
      </Link>
      <Link to="/registration">
        <button onClick={navigateToRegistration}>
          Click to go to registration
        </button>
      </Link>
      <Link to="/Login">
        <button onClick={navigateToLogin}>Click to go to login</button>
      </Link>
    </div>
  );
}

export default Home;
