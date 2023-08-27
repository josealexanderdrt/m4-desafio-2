import { useState } from "react"
const Formulario = ({mostrarAlerta}) => {
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState ('');
    const [contraseña, setContraseña] = useState('');
    const [confirmacontraseña, setConfirmacontraseña] = useState ('');

    const limpiarFormulario = ()=>{
        setNombre('');
        setMail('');
        setContraseña('');
        setConfirmacontraseña('');
    }

    
    // estado para los errores
    const [error, setError] = useState(false);
   //Funcion antes de enviar el Formulario
    const validarDatos = (e) => {
        e.preventDefault();
        //Validacion
       if (nombre === '' ||mail ==='' || contraseña ==='' || confirmacontraseña ===''){
        mostrarAlerta('danger','Debe completar los campos');
         return
       }

       if (contraseña !== confirmacontraseña){
        mostrarAlerta('danger','Contraseñas no coinciden');
        return
       }else{
        mostrarAlerta('success','Registro exitoso');
        limpiarFormulario();
        return
       }     

    };

  return (
    <>
    <form className="formulario" onSubmit={validarDatos}>
    
        
        <div className="form-group">  
            <input
            placeholder="Nombre"
            type="text" 
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}

            
            />
            
        </div>


        <div className="form-group">
            <input 
            placeholder="tuemail@ejemplo.com"
            type="text" 
            name="mail"
            className="form-control"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            
            />
        </div>

        <div className="form-group">
            <input 
            placeholder="Contraseña"
            type="password" 
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
           
            />
        </div>

        <div className="form-group">
            <input 
            placeholder="Confirma tu contraseña"
            type="password" 
            name="confirmacontraseña"
            className="form-control"
            onChange={(e) => setConfirmacontraseña(e.target.value)}
            value={confirmacontraseña}
          
            />
        </div>

        <button type="submit" className="btn
            btn-dark">Registrarse 
        </button>
       

    </form> 
{/* 
    <div className="mError" >
    {mensajevalidacion? <p>{mensajevalidacion}</p>:null}
    </div> */}
   
    </>
  )
}

export default Formulario