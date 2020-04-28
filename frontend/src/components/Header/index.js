import React, {useRef, useEffect} from 'react'
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import useUser from '../../hooks/useUser';

import Logo from '../../components/Logo/index'

export default function Header({tipo}) {
    const user      = useUser();
    const titulo    = useRef(null);
    const menu      = useRef(null);
    const history   = useHistory();

    useEffect(() => {
        document.addEventListener('click', handleClick, false)
        
        return () => {
            document.removeEventListener('click', handleClick, false)
        }
    }, [])

    const handleClick = (e)=>{
        if(user.getEmail()){
            if(titulo.current.contains(e.target)){

                menu.current.style.display = 'block';
            }
            else{
                
                menu.current.style.display = 'none';
            }
        }
    }

    const sair = ()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        history.replace('/')
    }

    return (

        <div className="container">
            <nav className="header">
                {user.getEmail() ?
                    <>
                        <Logo path="search"></Logo>
                        <div className="header__submenu">
                        <a href="#" className="header__link" ref={titulo}>{user.getEmail()}</a>
                            <ul ref={menu} className="menuList">
                                <li><Link to="addProduct">Cadastrar Produtos</Link></li>
                                <li><Link to="myProducts">Meus Produtos</Link></li>
                                <li onClick={sair}><Link to="">Sair</Link></li>
                            </ul>
                        </div>
                    </>
                :
                    (tipo == 'voltar' ?
                    <Link to="/" className="header__link">Voltar</Link>
                    :
                    <> 
                        <Logo></Logo>
                        <Link to="/signin" className="header__link">Login</Link>
                    </>

                    )
                }
                
            </nav>
        </div>
    )
}
