import Admin from "../models/Admin.js";
import Cource from "../models/Cource.js";
import Student from "../models/Student.js";

export const loginAdmin = async (req, res )=>{
    const {name, password} = req.body;

    try {
        const admin = await Admin.findOne({ name, password });
        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", admin });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const createAdmin = async (req,res)=>{
    const {name, password}= req.body;
    try{
        const newAdmin = new Admin({name, password})
        await newAdmin.save();
        res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const updateAdmin = async (req, res)=>{
    const {id} = req.params;
    const {name, password} =req.body;
    try{
        const updateAdmin = await Admin.findByIdAndUpdate(id, {name, password})
        res.status(200).json({ message: "Admin updated successfully", admin: updateAdmin });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const addCource = async (req, res)=>{
    const {title} = req.body;
    try{
        const newCource = new Cource({title})
        await newCource.save();
        res.status(201).json({ message: "Course created successfully", course: newCource });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const addStudent = async (req, res)=>{
    const {name, age, course, cource } = req.body;
    try{
      let courseId = course || cource;
      
      // If the provided course identifier is not a valid 24-character hex ObjectId, assume it's a title
      if (courseId && !String(courseId).match(/^[0-9a-fA-F]{24}$/)) {
          const foundCourse = await Cource.findOne({ title: courseId });
          if (!foundCourse) {
              return res.status(404).json({ message: "Course not found with the provided title" });
          }
          courseId = foundCourse._id;
      }

      const newStudent = new Student ({name, age, course: courseId })
      await newStudent.save();
      res.status(201).json({ message: "Student created successfully", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Server error" , error: error.message});
    }
}

export  const getAllStudents = async (req,res) =>{
    try{
        const students = await Student.find().populate('cource')
        res.status(200).json({ message: "Students retrieved successfully", students });
    } catch (error) {
        res.status(500).json({ message: "Server error" , error: error.message});
    }
}