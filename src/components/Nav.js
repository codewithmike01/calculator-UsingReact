import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="header" data-testid="nav-data">
      <div>Math Magicians</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
            <span>|</span>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
            <span>|</span>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
