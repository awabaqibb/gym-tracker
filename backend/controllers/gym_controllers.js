const GymModel = require("../models/gym_model");
const mongoose = require("mongoose");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

const getWorkouts = async (req, res) => {
  const workouts = await GymModel.find({});
  res.status(200).json({ workouts });
};

const getOneWorkout = async (req, res) => {
  const workoutId = req.params.id;
  console.log(workoutId);

  if (!isValidId(workoutId)) {
    return res.status(400).json({ msg: "Invalid ID" });
  }

  const workout = await GymModel.findById(workoutId);
  if (!workout) {
    return res.status(404).json({ msg: "Workout not found" });
  }

  res.status(200).json({ current: workout });
};

const addWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const workout = await GymModel.create({ title, reps, load });
  res.status(200).json({ new: workout });
};

const deleteWorkout = async (req, res) => {
  const workoutId = req.params.id;
  if (!isValidId(workoutId)) {
    return res.status(400).json({ msg: "Invalid ID" });
  }

  const workout = await GymModel.findByIdAndDelete(workoutId);
  res.status(200).json({ deleted: workout });
};

const editWorkout = async (req, res) => {
  const workoutId = req.params.id;
  const { reps } = req.body;
  const workout = await GymModel.findByIdAndUpdate(workoutId, {
    reps: reps,
  });

  res.status(200).json({ updated: workout });
};

module.exports = {
  getOneWorkout,
  getWorkouts,
  addWorkout,
  deleteWorkout,
  editWorkout,
};
