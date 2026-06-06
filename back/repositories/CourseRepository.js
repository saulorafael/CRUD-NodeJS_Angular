import Course from "../models/Course.js";

const saveCourse = async (courseModel) => {
    const save = await Course.create(courseModel);
    return save
}

const getAllCourses = async () => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getCourseById = async (id) => {
    return await Course.findByPk(id);
}

const updateCourseById = async (id, courseModel) => {
    try {
        const result = await Course.update(courseModel, { where: { id } });
        if (result[0] > 0) {
            return { message: "Course atualizado com sucesso" + id };
        } else {
            return { message: "Usuário não encontrado" + id, status: 404 };
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteCourseById = async (id) => {
    return await Course.destroy({ where: { id } });
}

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById
}

export default factory;