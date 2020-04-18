import React from 'react'
import './styles.css'

// import Gallery from '../Gallery/index'
import Button from '../../components/Button/index'
import Save from '../../components/Save/index'



export default function Card() {
    return (
        <div className="card">
            <div className="card__header">
                <Save></Save>
                <a className="card__gallery">Ver imagens</a>
            </div>
            <div>
                <small className="card__category"><a>Grãos</a> em <strong>Vila do Encontro</strong></small>
                <h2 className="card__title">Arroz Integral 400kg</h2>
                <p className="card__caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p className="card__caption"><span><strong>Carga:</strong></span> 400kg</p>
                <Button>Solicitar contato</Button>
            </div>
        </div>
    )
}