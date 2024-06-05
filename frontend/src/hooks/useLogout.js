import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    workoutsDispatch({ type: "CLEAR_WORKOUTS" });
  };
  return { logout };
};
