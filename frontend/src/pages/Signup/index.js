import React, {useState} from 'react'
import BannerAuth from '../../assets/img/authBg.png'
import {useHistory} from 'react-router-dom';
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

        const user = await api.post('/usuarios/adicionar',{email, senha:password});
        if(user.status !== 200){
            //TODO - BOTAR UM ERRO
        }

        history.replace('/search');
        console.log(user);
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

                    <button className="loginBox__button">Cadastrar-se</button>
                </form>
            </div>
        </div>
        </>
    )
}
