import PropTypes from "prop-types";
import { Card } from "../../index";

const Details = ({ workouts }) => {
  return (
    <>
      {workouts &&
        workouts.map((workout) => {
          return (
            <Card
              key={workout._id}
              id={workout._id}
              title={workout.title}
              reps={Number(workout.reps)}
              load={Number(workout.load)}
              createdAt={workout.createdAt}
            />
          );
        })}
    </>
  );
};

Details.propTypes = {
  workouts: PropTypes.array.isRequired,
};

export default Details;
