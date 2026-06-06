import User from "../models/User.js";

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save
}

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getUserById = async (id) => {
    return await User.findByPk(id);
}

const updateUserById = async (id, userModel) => {
    try {
        const result = await User.update(userModel, { where: { id } });
        if (result[0] > 0) {
            return { message: "User atualizado com sucesso" + id };
        } else {
            return { message: "Usuário não encontrado" + id, status: 404 };
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteUserById = async (id) => {
    return await User.destroy({ where: { id } });
}

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}

export default factory;