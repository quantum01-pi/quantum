import React from 'react'
import './styles.css'

import Logo from '../../components/Logo'



export default function NotFound() {

    return (
        <>
            <div class="content">
                <Logo></Logo>
                <h2 class="notfound__title">Putz, não encontramos o que você está buscando :/</h2>
                <p class="notfound__caption">Erro 404 - Página não encontrada.</p>
                <a class="notfound__link" href="javascript:history.back()">Voltar para página anterior</a>
            </div>
        </>
    )
}
