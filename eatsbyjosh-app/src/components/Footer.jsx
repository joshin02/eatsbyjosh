import { Link } from 'react-router-dom';
import './FooterStyle.css'

function Footer() {
    return (
      <div>
        <footer>
            <div className="social-icons">
                <a href="https://www.instagram.com/eatsby.josh/" className="fab fa-instagram"></a>
                <a href="https://www.tiktok.com/@eatsby.josh" className="fab fa-tiktok"></a>
                <a href="https://www.yelp.com/collection/YdnF5NXDdRDeTq7u_AdkqQ?utm_content=Collections&utm_source=ishare" className="fab fa-yelp"></a>
            </div>
            <Link to="/"><img src="/img/logo.png" alt="eats by josh logo"/></Link>
            <p>© 2024 Eats by Josh. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default Footer;