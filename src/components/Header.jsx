import { useState } from "react";
import Hamburgerbar from "./Hamburgerbar";

export default function Headerjf () {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
      setIsOpen(!isOpen)
  }; 
  
    return (
      <header>
        <div id="header-container">
          <a href="index">
            <img src="/JF.png" alt="JF logo" id="jf-logo" />
          </a>
          <nav className="nav">
            <div className="navbar">
              <a href="#about-me"><p>About</p></a>
              <a href="#skill"><p>Programs & skills</p></a>
              <a href="#portfolio"><p>Portfolio</p></a>
              <a href="#contact"><p>Contact</p></a>
            </div>
          </nav>
          <Hamburgerbar handleMenuToggle={handleMenuToggle} isOpen={isOpen}/>
        </div>
      </header>
    )
}

