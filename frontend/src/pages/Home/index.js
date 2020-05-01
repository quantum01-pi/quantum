import React from 'react'
import './styles.css'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BannerHome from '../../assets/img/bannerHome.png'
import Mudas from '../../assets/img/mudas.jpg'
import Laranja from '../../assets/img/problema.png'
import Celular from '../../assets/img/recursos.png'
import Graos from '../../assets/img/graos.jpg'
import Feira from '../../assets/img/feira.jpg'

import Card from '../../components/Card'
import Gallery from '../../components/Gallery'

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
                
                <Card>
                </Card>

                <Footer/>
            </div>
        </>
    )
}
