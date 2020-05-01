import React from 'react'
import './styles.css'

// import Gallery from '../Gallery/index'
import Button from '../../components/Button/index'
import Save from '../../components/Save/index'
import Gallery from '../Gallery'



export default function Card(
    {categoria="Grãos",
    nome="Arroz Integral",
    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    carga="400kg",
    local="Vila do encontro"}
) {
    return (
        <div className="card">
            <div className="card__header">
                <Save></Save>
                <a className="card__gallery">Ver imagens</a>
            </div>
            <div>
            <small className="card__category"><a>{categoria}</a> em <strong>{local}</strong></small>
                <h2 className="card__title">{nome} {carga}</h2>
                <p className="card__caption">{descricao}</p>
                <p className="card__caption"><span><strong>Carga:</strong></span> {carga}</p>
                <Button>Solicitar contato</Button>
            </div>
            {/* <Gallery></Gallery> */}
        </div>
    )
}