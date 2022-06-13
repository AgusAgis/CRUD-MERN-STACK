import React from "react";
import { useState } from "react";
import styles from "./Styles/AddUser.module.css"
import Validate from "./Controllers/Controller";

function AddUser(){

    const [input, setInput] = useState({
        IdSenasa: "",
        TipoDeAnimal:"",
        Peso:"" ,
        NombreDelPotrero:"" ,
        TipoDeDispositivo:"",
        NumeroDeDispositivo:"",
      });

    const [error, setError] = useState({});

    //!----------------HANDLECHANGE-----------------------
  function handleChange(e) {
    setInput(() => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
      const errors = Validate(newInput);
      setError(errors);
      return newInput;
    });
    console.table(input);
  }
function addAnimal(){

}

    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Registro de animales nuevos</h2>
            </div>
           
        <div className="row">
        <div className="col-sm-6 offset-3">
        <div>
          <label htmlFor="name" className="form-label">ID SENASA: </label>
          <input 
            className={(error.IdSenasa && styles.inputdanger) ||"form-control"}
            type="text"
            name="IdSenasa"
            value={input.IdSenasa}
            onChange={(e) => {
              handleChange(e);
            }}
    
          />
          {error.IdSenasa && <p className={styles.danger}>{error.IdSenasa}</p>}
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-6 offset-3">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Tipo de animal</label>
            <select type="text" className="form-control">
                <option value = "default">Seleccionar tipo</option>
                <option  value = "Novillo">Novillo </option>
                <option  value = "Vaquillona">Vaquillona </option>
                <option  value = "Toro">Toro </option>
            </select>
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-6 offset-3">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Peso del animal</label>
            <input 
            className={(error.peso && styles.inputdanger) ||"form-control"}
            type="text"
            name="peso"
            value={input.peso}
            onChange={(e) => {
              handleChange(e);
            }}
    
          />
          {error.peso && <p className={styles.danger}>{error.peso}</p>}
          
        </div>
        </div>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre del potrero</label>
            <input 
            className={(error.NombreDelPotrero && styles.inputdanger) ||"form-control"}
            type="text"
            name="NombreDelPotrero"
            value={input.NombreDelPotrero}
            onChange={(e) => {
              handleChange(e);
            }}
    
          />
          {error.NombreDelPotrero && <p className={styles.danger}>{error.NombreDelPotrero}</p>}
          
           
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6 offset-3">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Tipo de dispositivo</label>
            <select type="text" className="form-control">
                <option value = "default">Seleccionar tipo</option>
                <option  value = "Collar">Collar </option>
                <option  value = "Caravana">Caravana </option>
            </select>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6 offset-3">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Número de dispositivo</label>
            <input 
            className={(error.NumeroDeDispositivo && styles.inputdanger) ||"form-control"}
            type="text"
            name="NumeroDeDispositivo"
            value={input.NumeroDeDispositivo}
            onChange={(e) => {
              handleChange(e);
            }}
            />
            {error.NumeroDeDispositivo && <p className={styles.danger}>{error.NumeroDeDispositivo}</p>}
        </div>
        </div>
        </div>
<button onClick={addAnimal} className="btn btn-success">Guardar animal</button>
        </div>
      
    )
}
export default AddUser;