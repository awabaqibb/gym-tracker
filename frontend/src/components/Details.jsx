import PropTypes from "prop-types";
import { Card } from "../../index";

const Details = ({ workouts }) => {
  return (
    <>
      {workouts.map((workout) => {
        return (
          <Card
            key={workout._id}
            title={workout.title}
            reps={workout.reps}
            load={workout.load}
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
