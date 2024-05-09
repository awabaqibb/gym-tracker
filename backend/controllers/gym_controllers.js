const GymModel = require("../models/gym_model");

const getWorkouts = async (req, res) => {
  const workouts = await GymModel.find({});
  res.status(200).json({ workouts });
};

const getOneWorkout = async (req, res) => {};

const addWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const workout = await GymModel.create({ title, reps, load });
  res.status(200).json({ new: workout });
};

const deleteWorkout = async (req, res) => {};

const editWorkout = async (req, res) => {};

module.exports = {
  getOneWorkout,
  getWorkouts,
  addWorkout,
  deleteWorkout,
  editWorkout,
};
