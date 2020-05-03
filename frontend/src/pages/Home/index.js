import React from 'react'
import './styles.css'
import '../../../node_modules/video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BannerHome from '../../assets/img/bgHomeBlur.png'
import Mudas from '../../assets/img/mudas.jpg'
import Laranja from '../../assets/img/problema.png'
import Celular from '../../assets/img/recursos.png'
import Graos from '../../assets/img/graos.jpg'
import Feira from '../../assets/img/feira.jpg'
import Agro from '../../assets/img/agro.mp4'

import Card from '../../components/Card'


export default function Home() {
    return (
        <>
            <img src={BannerHome} className="bg-home" alt="Fundo borrado"/>
            <Header></Header>
            <div className="container">
                <div class="video">
                    <div className="overlay">
                        <div className="video__caption">
                            <h2>Doar para gerar</h2>
                            <p>A <strong>Quantum</strong> é uma <strong>plataforma web</strong> capaz fornecer um ponto de encontro entre empresas interessadas em <strong>doar alimentos</strong> e instituições que  tem o interesse em receber essas doações.</p>
                            <p>As empresas doadoras podem utilizar dos benefícios fiscais devido suas doações.</p>
                        </div>
                    </div>
                    <Player
                        autoPlay
                        loop
                        src={Agro}>
                        <BigPlayButton className="bigplaybutton" position="center" />
                    </Player>
                </div>
                <section className="galeria">
                    <img src={Mudas} alt=""/>
                    <img src={Celular} alt=""/>
                    <img src={Feira} alt=""/>
                    <img src={Laranja} alt=""/>
                    <img src={Graos} alt=""/>
                </section>
                <Footer/>
            </div>
        </>
    )
}
