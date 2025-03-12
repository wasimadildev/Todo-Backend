const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"], // Restrict values to predefined options
      default: "Medium",
    },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);


module.exports = taskModel