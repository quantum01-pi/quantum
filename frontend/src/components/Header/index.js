import React from 'react'
import './styles.css';
import {Link} from 'react-router-dom';

import Logo from '../../components/Logo/index'

export default function Header({tipo}) {
    return (
        <div className="container">
            <nav className="header">
                {tipo == 'voltar' ?
                    <Link to="#" className="header__link">Voltar</Link>
                    :
                    <> 
                    <Logo></Logo>
                    <Link to="#" className="header__link">Login</Link>
                    </>
                }
                
            </nav>
        </div>
    )
}
