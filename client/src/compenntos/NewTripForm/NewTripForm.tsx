import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

type FormNewTrip = {
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  description: string;
  price: string;
  image: string;
  activities: string[];
};

function NewTrip() {
  const { register, handleSubmit } = useForm<FormNewTrip>();

  const onSubmit = async (userData: FormNewTrip) => {
    try {
      let stractivities = userData.activities as unknown as string;
      userData.activities = stractivities.split(",");

      const userToken = localStorage.getItem("userToken");

      const response = await axios.post(
        "http://localhost:3000/api/trips",
        userData,
        {
          headers: {
            "authorization ": userToken,
          },
        }
      );
      console.log("you logged in successfully:", response.data);
      alert("you logged in successfully");
    } catch (error) {
      console.error("Error while login: ", error);
      alert("Error while login ");
    }
  };

  return (
    <div className="container">
      <h1> New trip form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          name
          <input type="text" {...register("name")} />
        </label>
        <br />
        <label>
          destination
          <input type="text" {...register("destination")} />
        </label>
        <br />
        <label>
          startDate
          <input type="date" {...register("startDate")} />
        </label>
        <br />
        <label>
          endDate
          <input type="date" {...register("endDate")} />
        </label>
        <br />
        <label>
          description
          <input type="text" {...register("description")} />
        </label>
        <br />
        <label>
          price
          <input type="text" {...register("price")} />
        </label>
        <br />
        <label>
          image
          <input type="img" {...register("image")} />
        </label>
        <br />
        <label>
          activities
          <input type="text" {...register("activities")} />
        </label>
        <br />
        <input type="submit" value="login" />
      </form>
      <Link to="/trips">
        <button>Click to go to all trips</button>
      </Link>
    </div>
  );
}

export default NewTrip;
