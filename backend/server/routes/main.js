const express = require('express')
const { createStudent, getAllStudent, getSingleStudent, updateStudent, deleteStudent } = require('../controllers/student')

const router = express.Router();

router.post('/students', createStudent);
router.get('/students', getAllStudent)
router.get('/students/:studentId', getSingleStudent);
router.patch('/students/:studentId', updateStudent);
router.delete('/students/:studentId', deleteStudent);

module.exports = router;