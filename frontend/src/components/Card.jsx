import PropTypes from "prop-types";

export const Card = ({ title, reps, load, createdAt }) => {
  return (
    <div className="py-2">
      <div className="bg-white shadow-lg p-4 relative">
        <button className=" py-1 px-2 m-2 bg-red-500 text-white rounded-full absolute top-0 right-0">
          X
        </button>
        <h2 className="text-green-500">{title}</h2>
        <p className="font-medium">Reps: {reps}</p>
        <p className="font-medium">Load: {load}</p>
        <p>{createdAt} minutes ago</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  reps: PropTypes.number.isRequired,
  load: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Card;
