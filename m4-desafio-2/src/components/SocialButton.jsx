import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ( {icono1, icono2, icono3}) => {
  return (
    <>
    <div className="contenedorIconos">
    <FontAwesomeIcon icon = {icono1} className='iconos'/>
    <FontAwesomeIcon icon = {icono2} className='iconos'/>
    <FontAwesomeIcon icon = {icono3} className='iconos'/>
    </div>
    </>
  )
}

export default SocialButton