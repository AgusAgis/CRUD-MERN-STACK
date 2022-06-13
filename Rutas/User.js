const express  = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const alphanumeric =/^([a-zA-Z0-9_-]){1,16}$/

const alphanumeric2 =/^([a-zA-Z0-9_-]){1,8}$/

const eschemaanimal = new eschema({
    IdSenasa:{
    type: String,
        validate:{
              validator:(e) => alphanumeric.test(e),
}
    },
    TipoDeAnimal:ENUM("Vaquillona", "Toro", "Novillo"),
    Peso: Number,
    NombreDelPotrero: String,
    TipoDeDispositivo:ENUM("Collar", "Caravana"),
    NumeroDeDispositvo:{
        type: String,
        validate:{
              validator:(e) => alphanumeric2.test(e),
}
    } 
})


router.get

const ModeloAnimal = mongoose.model('animal', eschemaanimal)