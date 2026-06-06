import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Evaluation = sequelize.define('evaluations', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concept: {
        type: Datatypes.STRING,
        allowNull: false,
    },
}, { underscored: true});

export default Evaluation;