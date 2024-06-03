import { WorkoutForm } from "../../index";

const AddWorkout = () => {
  return (
    <WorkoutForm
      title={"Add a New Workout"}
      submitButtonText={"Add Workout"}
      fields={[
        {
          name: "name",
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
