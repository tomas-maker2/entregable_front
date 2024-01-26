
import { Link } from 'react-router-dom';
import './CSS/Thanks.css';


const ThanksPage = () => {

 

  return (
    <div className='cont'>
      <p className='gracias'>Gracias por tu compra!</p>
      <Link className='volver' to={'/'}>Volver a la pagina principal</Link>
    </div>
  )
}

export default ThanksPage