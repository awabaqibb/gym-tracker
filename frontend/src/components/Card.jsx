import PropTypes from "prop-types";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

export const Card = ({ title, reps, load, createdAt, id }) => {
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  const deleteWorkout = async (id) => {
    if (!user) {
      return;
    }

    const response = await fetch(`http://localhost:3000/api/workouts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error deleting workout");
    } else {
      dispatch({ type: "DELETE_WORKOUT", payload: id });
    }
  };

  return (
    <div className="py-2">
      <div className="bg-white shadow-lg p-4 relative">
        <button
          onClick={() => deleteWorkout(id)}
          className=" px-2 m-2 bg-red-500 text-white rounded-full absolute top-0 right-0"
        >
          X
        </button>
        <h2 className="text-green-500 font-bold">{title}</h2>
        <p className="font-medium">Reps: {reps}</p>
        <p className="font-medium">Load: {load}</p>
        <p>{createdAt} minutes ago</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  reps: PropTypes.number.isRequired,
  load: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
