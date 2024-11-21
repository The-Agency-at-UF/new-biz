import './Header.css'
import Headroom from 'react-headroom'
import Hamburger from './Hamburger'
import {Link} from 'react-router-dom';
import {useState} from 'react'

const Header: React.FC = () => {

  const [hamburgerState, setHamburgerState] = useState<boolean>(false);

  const receiveHamburgerState = (data: boolean):void => {
    setHamburgerState(!data);
  };

  
  return (
    <>
    <div>
    {/* headroom component makes navbar disappear and reappear on scroll */}

    <Headroom style={{
      zIndex: '20',

    }} pin={hamburgerState}>

    <div className="navbar bg-black bg-opacity-80">
        <div className="flex items-center justify-center"> 
        </div>
        <div className="right-navbar">
        <div className="standard-right">

        <h3 className="navbar-entry">
            <Link to="/home" className="bg-gradient-to-r from-yellow-400 to-[#f3ab57] text-transparent bg-clip-text">
                Home
            </Link>
        </h3>

        <h3 className="navbar-entry">
        <Link to="/about" className="bg-gradient-to-r from-yellow-400 to-[#ed735a] text-transparent bg-clip-text">
                About
            </Link>
        </h3>

        <h3 className="navbar-entry">
        <Link to="/meet-the-team" className="bg-gradient-to-r from-[#ed735a] to-[#e95d60] text-transparent bg-clip-text">
                Meet The Team
            </Link>
        </h3>

        <h3 className="navbar-entry">
        <Link to="/our-clients" className="bg-gradient-to-r from-[#e95d60] to-[#c183bd] text-transparent bg-clip-text">
                Our Clients
            </Link>
        </h3>

        <h3 className="navbar-entry">
        <Link to="/" className="bg-gradient-to-r from-[#c183bd] to-[#ad97ec] text-transparent bg-clip-text">
                Case Studies
            </Link>
        </h3>

        </div>
        <div className="hamburger"> 
        <Hamburger sendHamburgerState={receiveHamburgerState}/>
        </div>
        </div>
    </div>
    </Headroom>
    </div>
    </>
  )
}

export default Header;