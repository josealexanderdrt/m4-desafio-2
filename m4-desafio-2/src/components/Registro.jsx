import Alert  from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {
  
  return (
    <>
    <h1>Crea Una Cuenta</h1>
    <SocialButton icono1={faFacebook} icono2={faLinkedin} icono3={faGithub}/>
    <h3>O usa tu mail para registrarte</h3>
    <Formulario />
    <Alert />
    </>
  )
}

export default Registro