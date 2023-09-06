import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TripDetail.css";

interface TripDetails {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}
function TripDetails() {
  const { id } = useParams<{ id: string }>();
  const [trip, setTrip] = useState<TripDetails | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/trips/${id}`)
      .then((response) => {
        console.log(response.data);
        setTrip(response.data);
      })
      .catch((error) => {
        console.error("Error loading trip details:", error);
      });
  }, [id]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Trip Details</h1>
      <div className="CardTrip">
        <div className="trip">
          <h2>{trip.name}</h2>
          <p>Destination: {trip.destination}</p>
          <p>Start Date: {trip.startDate}</p>
          <p>End Date: {trip.endDate}</p>
          <p>Description: {trip.description}</p>
          <p>Price: ${trip.price}</p>
          <p>Activities: {trip.activities.join(", ")}</p>
          <img className="imgTrip" src={trip.image} alt={trip.name} />
          <div>
            <Link to={`/UpdateTripForm/${trip.id}`}>
              <button>Update Trip Form</button>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/trips">
        <button>Click to go to all trips</button>
      </Link>
    </>
  );
}

export default TripDetails;
