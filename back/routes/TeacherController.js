import express from "express";
let router = express.Router();

import teacherService from "../services/TeacherService.js";

router.post("addTeacher", async function (req, res){
    const teacherModel = {
        name: req.body.name,
    };

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
})

routes.get("/teacher/:id", async function (req, res) {
    const teacher = await teacherService.getTeacherById(req.params.id)
    return res.status(200).json(teacher);
})

router.get("/getAllTeachers", async function (req, res) {
    const teachers = await teacherService.getAllTeachers();
    return res.status(200).json(teachers);
})

router.delete("/deleteTeacher/:id", async function (req, res) {
    const teacher = await teacherService.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
})

router.purt("/updateTeacher/:id", async function (req, res) {
    const id = req.params.id;
    const teacherModel = {
        name: req.body.name,
    }

    const teacher = await teacherService(id, teacherModel)
    return res.status(200).json(teacher);
})

export default router;