//importa la conexion
import db from "../database/db.js";
//importa sequalize
import { DataTypes} from "sequelize";

const resultadosModel = db.define('resultados', {
    id_resultados: {type: DataTypes.INTEGER, primaryKey: true},
    id_periodo: {type: DataTypes.INTEGER},
    respuesta: {type: DataTypes.STRING},
    
},{   freezeTableName: true,  // Evita que Sequelize pluralice el nombre de la tabla
    timestamps: false,

}
);
export default resultadosModel