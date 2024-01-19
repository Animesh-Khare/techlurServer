// models/employeeModel.js
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: Date,
  salary: Number,
  joiningDate: Date,
  relievingDate: Date,
  contact: String,
  status: {
    type: String,
    // enum: ["active", "inactive"],
    default: "active",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
