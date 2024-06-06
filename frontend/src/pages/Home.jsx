import { useState, useEffect } from "react";
import { Details, AddWorkout } from "../../index";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        console.error("Error fetching workouts");
        setError(true);
        return;
      }

      const { workouts } = await response.json();
      if (!workouts.length) {
        setError(true);
      } else {
        dispatch({ type: "SET_WORKOUT", payload: workouts });
        setError(false);
      }
      setLoading(false);
    };

    if (user) {
      fetchWorkouts();
    }
  }, [user, dispatch]);

  useEffect(() => {
    setError(workouts.length === 0);
  }, [workouts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-5 mx-10">
      <button
        disabled={workouts.length === 0}
        className={`${
          error ? "bg-slate-500" : "bg-green-500"
        } shadow-md mt-3 p-1 rounded-lg text-sm text-white`}
      >
        Download as PDF
      </button>
      <div className="flex">
        <div className="flex-grow">
          {workouts && <Details workouts={workouts} />}
        </div>
        <div className="mx-20">
          <AddWorkout />
        </div>
      </div>
    </div>
  );
};

export default Home;
