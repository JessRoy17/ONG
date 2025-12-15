import'./menuDesplegable.css'
import logo from './img/LogoConfi.png'
import image1 from './img/blogger_google_blog_icon.svg'
import image2 from './img/calendar_date_events_logs_icon.svg'
import image3 from './img/call_cellular_contact_phone_icon.svg'
import image4  from './img/cancel_close_cross_delete_exit_icon.svg'
import image5 from './img/down_arrow_icon.svg'
import image6 from './img/education_bag_learning_study_school_icon.svg'
import image7 from './img/family_group_person_persons_icon.svg'
import image8 from './img/in_linkedin_media_portfolio_social_icon.svg'
import image9 from './img/instagram_icon.svg'
import image10 from './img/menu_right_icon.svg'
import image11 from './img/ui_essential_app_home_icon.svg' 
import image13 from './img/x_logo_twitter_new_brand_icon.svg'


function Desplegable() {
    return(
        <header className='oculto--header'>
        <nav className="nav-movil">
            <div className="nav__container">
                
                <img className="nav__logo" width={80} src={logo} alt="Confianza_Solidaria" />
                <h1 className='nav_name'>Confianza Solidaria</h1>
              
                <a href="#menu" className="nav__menu">
                    <img src={image10} className="nav__icon" />
                </a>
                <a href="#" className="nav__menu nav__menu--second">
                    <img src={image4} className="nav__icon " />
                </a>
                
            </div>
             
                <ul className="dropdown_movil" id="menu">
                   
                    <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img width="24px" src={image11} className="dropdown__icon" />
                            <span className="dropdown__span">Inicio</span>
                        </a>
                    </li>
                    <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img width="24px" src={image2} className="dropdown__icon" />
                            <span className="dropdown__span">Eventos</span>
                            <img src={image5} className="dropdown__arrow" />
                            <input type="checkbox" name='dropdown' className="dropdown__check" />
                        </a>
                        <div className="dropdown__content">
                            <ul className="dropdown__sub">
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Mercadillo Solidario</a>
                                </li>
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Distribución de Alimentos</a>
                                </li>
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">Recogida de Juguetes</a>
                                </li>
                            </ul>
                        </div>
    
                    </li>
                    <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img width="35px" src={image7} className="dropdown__icon" />
                            <span className="dropdown__span">Quienes somos</span>
                        </a>
                    </li>
                    <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img width="35px" src={image6} className="dropdown__icon" />
                            <span className="dropdown__span">Catálogo de libros</span>
                        </a>
                    </li>
                    <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img width="24px" src={image1} className="dropdown__icon" />
                            <span className="dropdown__span">Blog</span>
                        </a>
                    </li>
                    <li className="dropdown__list">
                        <a href="#" className="dropdown__link">
                            <img width="24px" src={image3} className="dropdown__icon" />
                            <span className="dropdown__span">Contacto</span>
                            <img src={image5} className="dropdown__arrow" />
                            <input type="checkbox" name='dropdown' className="dropdown__check" />
                        </a>
                        <div className="dropdown__content">
                            <ul className="dropdown__sub">
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">
                                        <img width="24px" src={image9} className="dropdown__icon" /> Instagram
                                    </a>
                                </li>
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">
                                        <img src={image13} className="dropdown__icon" />Twitter
                                    </a>
                                </li>
                                <li className="dropdown__li">
                                    <a href="#" className="dropdown__anchor">
                                        <img width="24px" src={image8} className="dropdown__icon" />Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            
        </nav>
        </header>
    )

}

export default Desplegable;