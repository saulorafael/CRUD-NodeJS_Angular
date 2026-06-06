import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel);
    return save
}

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
}

const updateTeacherById = async (id, teacherModel) => {
    try {
        const result = await Teacher.update(teacherModel, { where: { id } });
        if (result[0] > 0) {
            return { message: "Teacher atualizado com sucesso" + id };
        } else {
            return { message: "Usuário não encontrado" + id, status: 404 };
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({ where: { id } });
}

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById
}

export default factory;