import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <Link to="/"> home </Link>
        <Link to="/about"> about </Link>
        <Link to="/dataPlatformApp"> 404 </Link>
    </header>
);

export default Header;