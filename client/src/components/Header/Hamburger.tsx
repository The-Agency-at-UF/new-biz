import { FC } from 'react';
import './Hamburger';
import icon from "../../images/hamburger-menu.svg";
import {useState} from "react";
import {Link} from "react-router-dom";

interface HamburgerProps {
    sendHamburgerState: (data: boolean) => void;
}
const Hamburger: FC<HamburgerProps> = ({sendHamburgerState}) => {
  const [hamburgerOpen, setHamburger] = useState<boolean>(false);

  const toggleHamburger = ():void => {
    setHamburger(!hamburgerOpen);
    sendData();
  }

  const sendData = ():void => {
    const data: boolean = hamburgerOpen;
    sendHamburgerState(data);
  }


  return (
    <>
      <div className="hamburger-menu" onClick={toggleHamburger}>
      <img className="hamburger-icon z-30" src={icon}/> 
      </div>

    <div className="hamburger-overlay z-20">
      <div className="hamburger-links"> 
        <h3 className="navbar-entry hamburger-entry"> <Link to="/home" onClick={()=>{setHamburger(false); sendData();}}> Home </Link> </h3>
        <h3 className="navbar-entry hamburger-entry"><Link to="/about" onClick={()=>{setHamburger(false); sendData();}}> About </Link> </h3>
        <h3 className="navbar-entry hamburger-entry"> <Link to="/meet-the-team" onClick={()=>{setHamburger(false); sendData();}}> Meet The Team </Link> </h3>
        <h3 className="navbar-entry hamburger-entry"> <Link to="/our-clients" onClick={()=>{setHamburger(false); sendData();}}> Our Clients </Link> </h3>
        <h3 className="navbar-entry hamburger-entry"> <Link to="/" onClick={()=>{setHamburger(false); sendData();}}> Case Studies </Link> </h3>
      </div>
    </div> 

      <style jsx>{`
        .hamburger-entry{
          display: ${hamburgerOpen ? 'inherit' : 'none'};
        }

        .hamburger-overlay{
          height: ${hamburgerOpen ? '100vh' : '0'};
        }
      `}</style>
    </>
  );
};

export default Hamburger;