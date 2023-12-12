const { RobotStatus, robotStatusValidator } = require("../models/robotStatus");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

const updateRobotStatus = async (data) => {
  try {
    const error = robotStatusValidator(data);
    if (error) return "Invalid robot status";

    const robotStatus = await RobotStatus.findOneAndUpdate(
      {},
      { status: data.status },
      { new: true }
    );

    if (!robotStatus) return "Robot status not found";
    // res.send(robotStatus);
    return robotStatus;
  } catch (error) {
    return error;
  }
};
const getRobotStatus = async (req, res) => {
  const robotStatus = await RobotStatus.find();
  // res.send(robotStatus);
  return robotStatus;
};

module.exports = {
  updateRobotStatus,
  getRobotStatus,
};
