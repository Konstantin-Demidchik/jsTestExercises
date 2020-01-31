import React from 'react'
import {
  Link
} from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="header__content">
      <div className="header__link">
        <Link to="/">Main</Link>
      </div>
      <div className="header__link">
        <Link to="/actors">Actors</Link>
      </div>
    </div>
   </header>
)


export default Header;
