import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (evaluationModel) => {
    const save = await Evaluation.create(evaluationModel);
    return save
}

const getAllEvaluations = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
}

const updateEvaluationById = async (id, evaluationModel) => {
    try {
        const result = await Evaluation.update(evaluationModel, { where: { id } });
        if (result[0] > 0) {
            return { message: "Evaluation atualizado com sucesso" + id };
        } else {
            return { message: "Usuário não encontrado" + id, status: 404 };
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({ where: { id } });
}

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    updateEvaluationById,
    deleteEvaluationById
}

export default factory;