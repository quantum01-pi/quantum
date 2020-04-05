import React from 'react'
import './styles.css'
import Header from '../../components/Header/index'
import BgHome from '../../assets/img/bgHome.png'
import BannerHome from '../../assets/img/bannerHome.png'
import Mudas from '../../assets/img/mudas.jpg'
import Laranja from '../../assets/img/laranja.jpg'
import Celular from '../../assets/img/celular.jpg'
import Graos from '../../assets/img/graos.jpg'
import Feira from '../../assets/img/feira.jpg'

export default function Home() {
    return (
        <>
            <img src={BannerHome} className="bg-home" alt="Fundo borrado"/>
            <Header></Header>
            <div className="container">
                <img src={BannerHome} className="banner" alt="Pessoa tocando plantação"/>
                <section className="galeria">
                    <img src={Mudas} alt=""/>
                    <img src={Celular} alt=""/>
                    <img src={Feira} alt=""/>
                    <img src={Laranja} alt=""/>
                    <img src={Graos} alt=""/>
                </section>
            </div>
        </>
    )
}
