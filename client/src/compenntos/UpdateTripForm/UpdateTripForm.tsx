import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

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

function UpdateTripForm() {
  const { id } = useParams<{ id: string }>();
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const userToken = localStorage.getItem("userToken");
        const response = await axios.get(
          `http://localhost:3000/api/trips/${id}`,
          {
            headers: {
              "authorization ": userToken,
            },
          }
        );
        setTripDetails(response.data);
      } catch (error) {
        console.error("Error while fetching trip details: ", error);
      }
    };

    fetchTripDetails();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (tripDetails) {
      setTripDetails({
        ...tripDetails,
        [name]: value,
      });
    }
  };

  const handleActivitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (tripDetails) {
      const updatedActivities = value
        .split(",")
        .map((activity) => activity.trim());
      setTripDetails({
        ...tripDetails,
        activities: updatedActivities,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tripDetails) {
      try {
        const userToken = localStorage.getItem("userToken");

        const response = await axios.put(
          `http://localhost:3000/api/trips/${tripDetails.id}`,
          tripDetails,
          {
            headers: {
              authorization: userToken,
            },
          }
        );
        console.log("Trip updated successfully:", response.data);
        alert("Trip updated successfully:");
      } catch (error) {
        console.error("Error while updating trip: ", error);
        alert("Error while updating trip: ");
      }
    }
  };

  if (!tripDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Trip</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={tripDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={tripDetails.destination}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={tripDetails.startDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={tripDetails.endDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={tripDetails.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={tripDetails.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={tripDetails.image}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Activities:
          <input
            type="text"
            name="activities"
            value={tripDetails.activities.join(", ")}
            onChange={handleActivitiesChange}
          />
        </label>
        <br />
        <button className="btn btn-primary" type="submit">
          Update Trip
        </button>
      </form>
      <Link to="/trips">
        <button className="btn btn-primary">Click to go to all trips</button>
      </Link>
    </div>
  );
}

export default UpdateTripForm;
