
import express from 'express';
import { loginAdmin,
    createAdmin,
    updateAdmin,
    addCource,
    addStudent,
    getAllStudents
 } from "../controllers/adminController.js";

 const adminRouter = express.Router()
 

 adminRouter.post('/admin/login', loginAdmin);
 adminRouter.post('/admin/create',createAdmin);
 adminRouter.put('/admin/update/:id', updateAdmin);
 adminRouter.post('/admin/addcource', addCource);
 adminRouter.post('/admin/addstudent', addStudent);
 adminRouter.get('/admin/students', getAllStudents);

 export default adminRouter;