import { useState, useEffect } from "react";
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

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/trips")
      .then((response) => {
        setTrips(response.data);
      })
      .catch((error) => {
        console.error("Error loading trip data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Trips</h1>
        <ul>
          {trips.map((trip) => (
            <div className="CardTrips">
              <ol key={trip.id}>
                <h2>{trip.name}</h2>
                <p>Destination: {trip.destination}</p>
                <p>Start Date: {trip.startDate}</p>
                <p>End Date: {trip.endDate}</p>
                <img className="imgTrips" src={trip.image} alt={trip.name} />
              </ol>
            </div>
          ))}
        </ul>
      </div>
  );
}

export default Trips;
