import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiCode, FiGrid, FiMail, FiMenu, FiTarget, FiUsers, FiX } from "react-icons/fi";
import logo from "../assets/dorse-logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <span>New cohort seats open now</span>
        <Link to="/contact" onClick={closeMenu}>Book a placement call <FiArrowRight /></Link>
      </div>
      <nav>
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Dorse Learning Studio" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <main className={open ? "open" : ""}>
          <NavLink to="/" end onClick={closeMenu}><FiGrid /> Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}><FiUsers /> About</NavLink>
          <NavLink to="/programs" onClick={closeMenu}><FiBookOpen /> Programs</NavLink>
          <NavLink to="/services" onClick={closeMenu}><FiCode /> Services</NavLink>
          <NavLink to="/showcase" onClick={closeMenu}>Showcase</NavLink>
          <NavLink to="/outcomes" onClick={closeMenu}><FiTarget /> Outcomes</NavLink>
          <NavLink to="/pricing" onClick={closeMenu}>Plans</NavLink>
          <NavLink className="nav-cta" to="/contact" onClick={closeMenu}><FiMail /> Contact</NavLink>
        </main>
      </nav>
    </header>
  );
};

export default Header;
