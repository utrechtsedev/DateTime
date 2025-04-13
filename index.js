import { sequelize, Column } from "./database.js";

const date = new Date()

await Column.create({ date: date })
