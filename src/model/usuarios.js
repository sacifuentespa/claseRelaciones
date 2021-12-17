

const path = require("path");
const sequelize = require ('sequelize')
const db = require ('../database/models')

let usuariosModel = {
    findRegisters: () => db.Usuario.findAll().then(usuarios => console.log(usuarios))
}

