const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const validator = require("validator");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 12,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 12,
    },
    username: {
      type: String,
      minLength: 4,
      maxLength: 12,
      lowercase: true,
      validate(value) {
        if (!validator.isLowercase(value)) {
          throw new Error("Please add username in lowercase");
        }
      },
    },

    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is not valid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  { timestamps: true }
);

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;