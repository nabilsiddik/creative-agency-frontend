import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img className='w-12 mx-auto lg:mx-0' src={logo} alt="logo" /></Link>
    </div>
  )
}

export default Logo
