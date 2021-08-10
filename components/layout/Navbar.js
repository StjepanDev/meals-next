import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link href="/">
          <Image
            src={logo}
            alt="meal logo"
            className="logo"
            width="350"
            height="50"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
