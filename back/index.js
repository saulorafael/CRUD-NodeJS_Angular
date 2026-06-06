import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/routes.js";

import sequelize from "./utils/database.js";
import associate from "./models/associate.js";

import cors from "cors";

const app = express();
const { json, urlendcoded } = pkg;

app.use(json());
app.use(urlendcoded({ extended: true }));
app.use("/", router);
app.use(cors());

(async () => {
    try {
        association.associations();
        await sequelize.sync();    
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");;    
        })
    } catch (error) {
        console.log(error);
    }
})();
