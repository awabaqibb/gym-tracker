import { useEffect, useState } from "react";
import { Details, AddWorkout } from "../../index";

const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        console.error("Error fetching workouts", data);
        return;
      }

      const data = await response.json();
      setWorkouts(data.workouts);
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="flex justify-between my-10 px-4 md:px-10">
      <div className="flex-grow mx-10">
        <Details workouts={workouts} />
      </div>
      <div className="mx-20">
        <AddWorkout />
      </div>
    </div>
  );
};

export default Home;
