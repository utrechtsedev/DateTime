import { Sequelize, Model, DataTypes } from "sequelize";
import dotenv from 'dotenv'; dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mariadb",
  logging: false,
  timezone: "+02:00",
  ssl: true
});

class Column extends Model { };

Column.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
},
  {
    sequelize,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
)
try {
  await sequelize.sync({})
  console.log("successfully synced")
} catch (error) {
  console.log(error.text)
}


export { sequelize, Column };
