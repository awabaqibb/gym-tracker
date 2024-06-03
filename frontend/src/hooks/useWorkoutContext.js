import { useContext } from "react";
import { WorkoutContext } from "../context/context";

export const useWorkoutContext = () => {
  const ctx = useContext(WorkoutContext);
  if (!ctx) {
    throw new Error(
      "useWorkoutContext must be used within a WorkoutContextProvider"
    );
  }

  return ctx;
};
