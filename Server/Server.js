const express = require('express')
const app = express()
//importo conexión mongoDB
const archivoBD = require("./Conection")

//Importación de archivo de rutas y modelo
const rutauser = require('../Rutas/User')

app.use('/api/usuario', rutausuario)


app.get("/", (req, res) =>{
    res.end("Bienvenidos al servidor backend Node")

})

//Configurar server básico
app.listen(5000,function(){
    console.log("El servidor está corriendo correctamente")
})