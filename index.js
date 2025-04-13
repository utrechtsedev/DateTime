import { sequelize, Column } from "./database.js";

const date = new Date()
console.log(date.toString())
await Column.create({ date: date })
