import React from 'react'
import './styles.css'


export default function Card() {
    return (
        <div className="card">
            <div>
                <a><i>Favoritar</i></a>
                <a>Ver imagens</a>
            </div>
            <div>
                <small><a>Grãos</a> em <strong>Vila do Encontro</strong></small>
                <h2>Arroz Integral 400kg</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p><span><strong>Carga:</strong></span> 400kg</p>
                <button>Solicitar contato</button>
            </div>
        </div>
    )
}