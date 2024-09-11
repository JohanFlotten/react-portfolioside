import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import hamburger from "../components/Hamburger.module.css";

export default function Hamburgerbar({ isOpen, handleMenuToggle }) {
  return (
    <>
      {!isOpen && (
        <button className={hamburger.iconbutton} onClick={handleMenuToggle}>
          <GiHamburgerMenu className={hamburger.icon} />
        </button>
      )}


      {isOpen && (
        <div className={hamburger.overlay}>
          <button className={hamburger.closeButton} onClick={handleMenuToggle}>
            <IoCloseSharp className={hamburger.closeIcon} />
          </button>

          <nav className={hamburger.mobileNav}>
            <a href="#about-me" onClick={handleMenuToggle}>About</a>
            <a href="#skill" onClick={handleMenuToggle}>Programs & skills</a>
            <a href="#portfolio" onClick={handleMenuToggle}>Portfolio</a>
            <a href="#contact" onClick={handleMenuToggle}>Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}
