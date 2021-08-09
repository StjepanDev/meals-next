import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link href="/">
          <img src={logo} alt="meal logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
