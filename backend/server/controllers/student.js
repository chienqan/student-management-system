const mongoose = require('mongoose')
const Student = require('../models/student')

// create new student
const createStudent = (req, res) =>{
    const student = new Student({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      age: req.body.age,
      university: req.body.university
    });
    
    return student
      .save()
      .then((newStudent) => {
        return res.status(201).json({
          success: true,
          message: 'New student created successfully',
          Student: newStudent,
        });
      })
      .catch((error) => {
          console.log(error);
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: error.message,
        });
      });
  }

  //get all students
  const getAllStudent = ( req, res) => {
    Student.find()
      .select('_id name age gender university')
      .then((allStudent) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all Student',
          Student: allStudent,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
      });
  }

// get single student
const getSingleStudent = (req, res) => {
  const id = req.params.studentId;
  Student.findById(id)
    .then((singleStudent) => {
      res.status(200).json({
        success: true,
        message: `More on ${singleStudent.name}`,
        Student: singleStudent,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This Student does not exist',
        error: err.message,
      });
   });
}

const updateStudent = (req, res) => {
  const id = req.params.studentId;
  const updateObject = req.body;
  Student.updateOne({ _id:id }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Student is updated',
        updateStudent: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}

// delete a student
const deleteStudent = (req, res) => {
  const id = req.params.studentId;
  Student.findByIdAndRemove(id)
    .exec()
    .then(()=> res.status(204).json({
      success: true,
    }))
    .catch((err) => res.status(500).json({
      success: false,
    }));
}

module.exports = {createStudent, getAllStudent, getSingleStudent, updateStudent, deleteStudent}