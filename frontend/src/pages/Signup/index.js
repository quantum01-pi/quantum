import React from 'react'
import BannerAuth from '../../assets/img/authBg.png'
import Logo from '../../components/Logo'
import Header from '../../components/Header/index'
import './styles.css'

export default function SignUp() {
    return (
        <>
        <img src={BannerAuth} className="bg-auth" alt="Fundo borrado"/>
        <Header tipo="voltar"></Header>
        <div className="container">
            <div className="loginBox">
                <Logo/>
                <label htmlFor="usuario" className="loginBox__label">Usuário <hr></hr></label>
                <i/><input type="text" placeholder="Usuário" id="usuario" name="usuario"/>

                <label htmlFor="senha" className="loginBox__label">Senha <hr></hr></label>
                <i/><input type="password" name="senha" placeholder="Senha" id="senha"/>

                <div className="loginBox__checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox" className="loginBox__checkbox__checkLabel">Continuar conectado</label>
                </div>
                <button className="loginBox__button">ENTRAR</button>
                <a href="#" className="loginBox__esqueceuSenha">Esqueceu a senha?</a>
            </div>
        </div>
        </>
    )
}
