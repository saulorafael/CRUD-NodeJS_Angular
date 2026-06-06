import express from "express";
let router = express.Router();

import UserController from "./UserController.js";
import CourseController from "./CourseController.js";
import TeacherController from "./TeacherController.js";
import EvaluationController from "./EvaluationController.js";

router.get("/", function (req, res){
    console.log('oi')
    res.status(200).json({message: 'oi'});
})

router.use("/users", UserController);
router.use("/courses", CourseController);
router.use("/teachers", TeacherController);
router.use("/evaluations", EvaluationController);

export default router;