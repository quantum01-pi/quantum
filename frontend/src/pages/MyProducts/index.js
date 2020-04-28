import React, {useState, useEffect} from 'react'
import './styles.css'

import Logo from '../../components/Logo/index'
import Card from '../../components/Card/index'
import Search from '../../components/Search/index'
import Header from '../../components/Header'
import api  from '../../services/api'
import useUser from '../../hooks/useUser'



export default function MyProducts() {
    const [produtos,setProdutos] = useState([]);
    const user                   = useUser();

    async function getProducts(){
        const req = await api.get('/produto');
        const userId = user.getId();
        let list = req.data.filter((item)=>item.usuario_id_usuario===parseInt(userId))
        setProdutos(list);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <div className="container">
                <div>
                    <Header/>
                    <Search></Search>
                </div>

                <div className="card-list">
                    {produtos.map((produto)=>
                        <Card
                            key={produto.id_produto}
                            nome={produto.nome_produto}
                            carga={produto.quantidade+produto.tipo_qtd}
                            local="São Paulo"
                        />
                    )}
                </div>
            </div>
        </>
    )
}
