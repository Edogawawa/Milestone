import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Todo = db.define('todos', {
   
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
    taskName : DataTypes.STRING,
    checked : DataTypes.BOOLEAN,
    category :DataTypes.JSON,
    date : DataTypes.STRING
}, {
    freezeTableName : true
});

export default Todo;

(async()=>{
    await db.sync();

})();

// import (Sequelize)