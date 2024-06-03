import { useEffect } from "react";
import { Details, AddWorkout } from "../../index";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        console.error("Error fetching workouts");
        return;
      }

      const { workouts } = await response.json();
      dispatch({ type: "SET_WORKOUT", payload: workouts });
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="flex justify-between my-10 px-4 ">
      <div className="flex-grow mx-10">
        {workouts && <Details workouts={workouts} />}
      </div>
      <div className="mr-40 ml-20">
        <AddWorkout />
      </div>
    </div>
  );
};

export default Home;
