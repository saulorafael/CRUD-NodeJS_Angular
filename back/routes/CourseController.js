import express from "express";
let router = express.Router();

import courseService from "../services/CourseService.js";

router.post("addCourse", async function (req, res){
    const courseModel = {
        name: req.body.name,
    };

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course);
})

routes.get("/course/:id", async function (req, res) {
    const course = await courseService.getCourseById(req.params.id)
    return res.status(200).json(course);
})

router.get("/getAllCourses", async function (req, res) {
    const courses = await courseService.getAllCourses();
    return res.status(200).json(courses);
})

router.delete("/deleteCourse/:id", async function (req, res) {
    const course = await courseService.deleteCourseById(req.params.id);
    return res.status(200).json(course);
})

router.purt("/updateCourse/:id", async function (req, res) {
    const id = req.params.id;
    const courseModel = {
        name: req.body.name,
    }

    const course = await courseService(id, courseModel)
    return res.status(200).json(course);
})




export default router;