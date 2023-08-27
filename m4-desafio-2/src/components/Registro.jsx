import { useState } from "react"
import Alert  from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {

  const [alerta, setAlert] = useState ({
    color:'',
    msg:''
  });
  
  return (
    <>
    <div className="gcontenedor">
    <h1>Crea Una Cuenta</h1>
    <SocialButton icono1={faFacebook} icono2={faLinkedin} icono3={faGithub}/>
    <h4>O usa tu mail para registrarte</h4>
    <Formulario setAlert={setAlert}/>
    <Alert color={alerta.color} msg={alerta.msg}/>
    </div>
    </>
  )
}

export default Registro