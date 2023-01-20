import './footer.scss'
import logo from '../../resources/img/logo.png'
import { useEffect } from 'react';



const Footer = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/a076d05399.js.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <footer className='app__footer'>
            <h1 className='app__titel'>
                MovieCon
            </h1>
            <div className='app__logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='app__conection'>
                <div className="app__conection-logo">
                    <div className='app__conection-logo-facebook'>
                        <a href="https://www.facebook.com/" target='_blanck'>
                            <i className='fab fa-facebook-f'></i>
                        </a>
                    </div>
                    <div className='app__conection-logo-instagram'>
                        <a href="https://www.instagram.com/" target='_blanck'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </div>
                    <div className='app__conection-logo-twitter'>
                        <a href="https://www.twitter.com/" target='_blanck'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

