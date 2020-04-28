import React,{useState, useEffect} from 'react'
import Header from '../../components/Header'
import useUser from '../../hooks/useUser';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import './styles.css'

import api from '../../services/api';

export default function AddProduct() {

    const [nome, setNome]               = useState();
    const [validade, setValidade]       = useState();
    const [quantidade, setQuantidade]   = useState();
    const [usuarioId, setUsuarioId]     = useState();
    const [unidade, setUnidade]         = useState();
    const user                          = useUser();
    const history                       = useHistory();

    useEffect(() => {
        setUsuarioId(user.getId());
    }, [])
    const submitHandler = async (e) => {
        e.preventDefault();
        const req = api.post('/produto/adicionar',{
            nome_produto:nome,
            quantidade,
            tipo_qtd:unidade,
            validade,
            usuario_id_usuario:usuarioId
        })

        toast.success("Produto cadastrado com sucesso!");
        history.replace('/search')

    };

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="productForm">
                    <form onSubmit={submitHandler}>
                        <h1>Cadastrar Produto</h1>
                        <label htmlFor="nome" required className="productForm__label">Nome<hr></hr></label>
                        <i/><input type="text" required onChange={(e)=> setNome(e.target.value)} placeholder="ex: Feijão" id="nome" name="nome"/>

                        <label htmlFor="quantidade" required className="productForm__label">Quantidade <hr></hr></label>
                        <i/>
                        <div className="productForm__qtd">
                            <input type="number" required onChange={(e)=> setQuantidade(e.target.value)} id="quantidade" placeholder="ex: 2" name="quantidade"/>
                            <select required onChange={(e)=>setUnidade(e.target.value)} defaultValue="">
                                <option value="" disabled>Medida</option>
                                <option value="KG">Quilos</option>
                                <option value="G">Gramas</option>
                                <option value="und">Unidades</option>
                                <option value="L">Litros</option>
                            </select>
                        </div>
                        
                        <label htmlFor="validade" required className="productForm__label">Validade<hr></hr></label>
                        <i/><input type="date" onChange={(e)=> setValidade(e.target.value)} id="validade" name="validade"/>

                        <button className="productForm__button">Salvar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
