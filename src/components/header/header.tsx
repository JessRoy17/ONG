import './headerPC.css'
import image5 from './img/down_arrow_icon.svg'
import logo from '../header/img/LogoConfi.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header--oculto-pc'>
            <nav className='nav-header'>
                <div className='cinco centrar'>
                    <Link to={'/'}>
                        <img width={80} src={logo} alt="Confianza_Solidaria" />
                    </Link>
                    <Link to={'/about'} className='a-header'>Nuestro equipo</Link>
                    <div className="dropdown-header     ">
                        <div className=" mitad-header">Eventos<img src={image5} className="dropdown__arrow" /></div>
                        <div className="dropdown-content-header">
                            <Link to={''} className="option-header"><li>Recogida de Alimentos</li></Link>
                            <Link to={''} className="option-header"><li>Recogida de Juguetes</li></Link>
                            <Link to={''} className="option-header"><li>Mercadillo</li></Link>
                        </div>
                    </div>
                    <Link to={'/library'} className='a-header' >Biblioteca Online</Link>
                    <Link to={'/blog'} className='a-header' >Blog</Link>
                    <Link to={'/contacto'} className='a-header' >Contacto</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;  