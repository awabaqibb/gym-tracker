import PropTypes from "prop-types";

export const Card = ({ title, reps, load, createdAt }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg p-4 flex-wrap">
      <button className=" p-2 bg-red-500 text-white rounded-full">X</button>
      <h2 className="text-green-500">{title}</h2>
      <p className="font-medium">Reps: {reps}</p>
      <p className="font-medium">Load: {load}</p>
      <p>{createdAt} minutes ago</p>
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
