import { WorkoutForm } from "../../index";

const AddWorkout = () => {
  return (
    <WorkoutForm
      heading={"Add a New Workout"}
      submitButtonText={"Add Workout"}
      fields={[
        {
          name: "title",
          label: "Exercise Name",
          type: "text",
          placeholder: "enter workout name",
        },
        {
          name: "load",
          label: "Load in KG",
          type: "number",
          placeholder: "enter load...",
        },
        {
          name: "reps",
          label: "Number of reps",
          type: "number",
          placeholder: "number of reps...",
        },
      ]}
    />
  );
};

export default AddWorkout;
