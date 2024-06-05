import { useState, useEffect } from "react";
import { Details, AddWorkout } from "../../index";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        console.error("Error fetching workouts");
        return;
      }

      const { workouts } = await response.json();
      dispatch({ type: "SET_WORKOUT", payload: workouts });
      setLoading(false);
    };

    if (user) {
      fetchWorkouts();
    }
  }, [user, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
