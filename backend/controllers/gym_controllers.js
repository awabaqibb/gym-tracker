const GymModel = require("../models/gym_model");
const mongoose = require("mongoose");
const generatePDF = require("../pdf/pdf_service");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  const workouts = await GymModel.find({ user_id });
  res.status(200).json({ workouts });
  return workouts;
};

const getPDF = async (req, res) => {
  const user_id = req.user._id;
  const username = req.body.username;
  const workouts = await GymModel.find({ user_id });

  const stream = res.writeHead(200, {
    "content-type": "application/pdf",
    "content-disposition": "attachment; filename=workouts.pdf",
  });

  generatePDF(stream, workouts, username);
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
  const user_id = req.user._id;
  const workout = await GymModel.create({ title, reps, load, user_id });
  console.log(workout);
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
  getPDF,
};
