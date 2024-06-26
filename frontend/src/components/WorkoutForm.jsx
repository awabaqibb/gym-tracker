import { useState } from "react";
import PropTypes from "prop-types";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const apiUrl = import.meta.env.VITE_API_URL;

const WorkoutForm = ({ heading, submitButtonText, fields }) => {
  const [formValues, setFormValues] = useState([]);
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutContext();

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const response = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(formValues),
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error("Error adding workout");
    } else {
      dispatch({ type: "ADD_WORKOUT", payload: json.new });
    }
  };

  return (
    <div>
      <h2 className="font-bold text-lg ">{heading}</h2>
      <form className="py-4" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div className="flex flex-col justify-between py-2" key={index}>
            <label htmlFor={field.name} className="pb-2 font-medium">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
            />
          </div>
        ))}

        <button
          className="bg-green-500 shadow-md mt-3 p-1 rounded-lg text-sm text-white"
          type="submit"
        >
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};

WorkoutForm.propTypes = {
  heading: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ).isRequired,
};

export default WorkoutForm;
