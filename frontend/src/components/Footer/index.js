import React from 'react'
import './styles.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__caption">@2020 Quantum - Todos os direitos reservados</p>
            <a className="footer__link" href="#">Privacidade</a>
            <a className="footer__link" href="#">Termos de uso</a>
            <a className="footer__link" href="#">Cookies</a>
            <a className="footer__link" href="#">Change Language</a>
        </footer>
    )
}
