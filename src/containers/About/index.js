import React from 'react';
import {Route} from 'react-router-dom';
import asyncComponent from 'root/utils/asyncComponent.js';
import AboutNav from 'root/components/AboutNav';

const AboutPrice = asyncComponent(() => import('../AboutPrice'));
const AboutUser = asyncComponent(() => import('../AboutUser'));

const About = () => (
    <div>
        <p>About</p>
        <AboutNav />
        <Route path="/about/price" component={AboutPrice} />
        <Route path="/about/user" component={AboutUser} />
    </div>
);

export default About;