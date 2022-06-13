import { alphanumeric, alphanumeric2 } from "./Regex";


function Validate (input){
    let error = {};
    if (!input.IdSenasa || !alphanumeric.test(input.IdSenasa)) {
        
      error.IdSenasa = "ID Senasa de 16 caracteres es requerido";
    }  

    if(!input.peso || !Number(input.peso) ){
        error.peso = "Debe introducir el número del peso del animal"
    }

    if(!input.NombreDelPotrero){
        error.NombreDelPotrero = "Debe introducir el nombre del potrero"
    }
    if(!input.NumeroDeDispositivo || !alphanumeric2.test(input.NumeroDeDispositivo)){
        error.NumeroDeDispositivo = "Debe introducir un número de 8 caracteres"
    }
  
    return error;
  
  
}
export default Validate;