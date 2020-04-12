import React from 'react'
import './styles.css';
import {Link} from 'react-router-dom';

import Logo from '../../components/Logo/index'

export default function Header() {
    return (
        <div className="container">
            <nav className="header">
                <Logo></Logo>
                <Link to="#" className="header__link">Login</Link>
            </nav>
        </div>
    )
}
