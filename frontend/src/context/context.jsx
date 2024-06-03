import { useReducer, createContext } from "react";

// Define the context
export const WorkoutContext = createContext();

// Define the reducer
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload],
      };

    case "DELETE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
      };

    case "SET_WORKOUT":
      console.log({ ...state, workouts: action.payload });
      return { ...state, workouts: action.payload };

    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: [],
  });

  return (
    <WorkoutContext.Provider value={{ workouts: state.workouts, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
