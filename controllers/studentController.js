let students = require("../models/studentModel");

const getStudents = (req, res) => {
    res.json(students);
};


const addStudent = (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        department: req.body.department
    };

    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
};

const updateStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name || student.name;
    student.department = req.body.department || student.department;

    res.json({
        message: "Student updated successfully",
        student
    });
};


const deleteStudent = (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
};

module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};