import React, {useState} from 'react'
import BannerAuth from '../../assets/img/authBg.png'
import {useHistory, Link} from 'react-router-dom';
import Logo from '../../components/Logo'
import Header from '../../components/Header/index'
import api from '../../services/api'
import './styles.css'

export default function SignUp() {

    const [email,setEmail]          = useState();
    const [password, setPassword]   = useState();
    const history                   = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const emails = await api.get('/usuarios');
        const compareEmail = emails.data.find(item => item.email === email);

        // Verifica se o usuário com o email enviado existe
        if(!compareEmail){
            //TODO - EXIBIR MENSAGEM CASO O USUÁRIO NÃO EXISTA
            console.log('usuario nao existe')
            return
        }else if(compareEmail && password !== compareEmail.senha){
            //TODO - EXIBIR MENSAGEM CASO O USUÁRIO EXISTA E A SENHA ESTEJA ERRADA
            console.log('usuario existe mas senha errada')
            return
        }

        localStorage.setItem('id',compareEmail.id_usuario)
        localStorage.setItem('email',compareEmail.email)
        history.replace('/search');
    }

    return (
        <>
        <img src={BannerAuth} className="bg-auth" alt="Fundo borrado"/>
        <Header tipo="voltar"></Header>
        <div className="container">
            <div className="loginBox">
                <Logo/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usuario" className="loginBox__label">Usuário <hr></hr></label>
                    <i/><input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="ex: adam_voland" id="usuario" name="usuario"/>

                    <label htmlFor="senha" className="loginBox__label">Senha <hr></hr></label>
                    <i/><input type="password" onChange={(e)=> setPassword(e.target.value)} name="senha" placeholder="ex: U29c@l" id="senha"/>

                    <div className="loginBox__checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox" className="loginBox__checkbox__checkLabel">Continuar conectado</label>
                    </div>
                    <button className="loginBox__button">Entrar</button>
                    <a href="#" className="loginBox__esqueceuSenha">Esqueceu a senha?</a>
                    <Link to="signup" className="loginBox__esqueceuSenha" style={{marginLeft:100}}>Cadastrar-se</Link>
                </form>
            </div>
        </div>
        </>
    )
}
