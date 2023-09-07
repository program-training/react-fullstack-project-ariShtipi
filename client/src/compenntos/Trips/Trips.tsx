import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Trips.css";

interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

function Trips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/trips")
      .then((response) => {
        setTrips(response.data);
      })
      .catch((error) => {
        console.error("Error loading trip data:", error);
      });
  }, [refresh]);

  const handleDelete = (tripId: string) => {
    const userToken = localStorage.getItem("userToken");

    axios
      .delete(`http://localhost:3000/api/trips/${tripId}`, {
        headers: {
          "authorization ": userToken,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setRefresh(!refresh);
        }
      })
      .catch((error) => {
        console.error("Error deleting trip:", error);
      });
  };
  return (
    <>
      <h1>Trips</h1>
      <ul>
        {trips.map((trip) => (
          <div className="CardTrips" key={trip.id}>
            <Link to={`/TripDetail/${trip.id}`}>
              <ol>
                <h2>{trip.name}</h2>
                <p>Destination: {trip.destination}</p>
                <p>Start Date: {trip.startDate}</p>
                <p>End Date: {trip.endDate}</p>
                <img className="imgTrips" src={trip.image} alt={trip.name} />
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleDelete(trip.id);
                  }}
                >
                  DELETE
                </button>
                <Link to={`/UpdateTripForm/${trip.id}`}>
                  <button className="btn btn-primary">Update Trip Form</button>
                </Link>
              </ol>
            </Link>
          </div>
        ))}
      </ul>
      <div>
        <Link to="/">
          <button className="btn btn-primary">Click to Home</button>
        </Link>
        <Link to="/NewTripForm">
          <button className="btn btn-primary">Click to New trips form</button>
        </Link>
      </div>
    </>
  );
}

export default Trips;
