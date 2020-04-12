import React from 'react'
import './styles.css'

import Logo from '../../components/Logo/index'
import Card from '../../components/Card/index'
import Search from '../../components/Search/index'



export default function SearchPage() {
    return (
        <>
            <div className="container">
                <div>
                    <Logo></Logo>
                    <Search></Search>
                </div>

                <div className="card-list">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </>
    )
}
