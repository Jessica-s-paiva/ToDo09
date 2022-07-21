import React from 'react'
import Botao from '../Botao/Botao'
import Destaque from '../Destaque/Destaque'
import S from './Cards.module.css'
const Cards = () => {
  return (
    <section className={S.container}>
        <picture className={S.contentFoto}>
            <img className={S.foto} />
        </picture>
        <Destaque text='Nome do produto'/>
        <p>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
        <small>De: </small>
        <Destaque text='Preço' />
        <small>Ou: </small>
        <Botao  text='Comprar' />
    </section>
  )
}

export default Cards