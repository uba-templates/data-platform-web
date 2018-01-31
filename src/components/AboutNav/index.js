import React from 'react';
import {Link} from 'react-router-dom';

const AboutNav = () => (
    <header>
        <Link to="/about/price"> price </Link>
        <Link to="/about/user"> user </Link>
    </header>
);

export default AboutNav;