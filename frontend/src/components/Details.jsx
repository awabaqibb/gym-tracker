import PropTypes from "prop-types";
import { Card } from "../../index";
import { differenceInHours } from "date-fns";

const Details = ({ workouts }) => {
  return (
    <>
      {workouts &&
        workouts.map((workout) => {
          const hoursSinceCreated = differenceInHours(
            new Date(),
            new Date(workout.createdAt)
          );

          return (
            <Card
              key={workout._id}
              id={workout._id}
              title={workout.title}
              reps={Number(workout.reps)}
              load={Number(workout.load)}
              createdAt={hoursSinceCreated}
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
