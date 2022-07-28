import React from 'react';
import S from './Header.module.css';
import Botao from '../Botao/Botao';
const Header = () => {
  return (
    <header>
        <h4>Uma seleção de produtos</h4>
        <h1>Especial para você</h1>
        <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        <div className={S.botoes}>
            <Botao  text='Conheça a Linx'/>
            <Botao  text='Ajude o algorítimo'/>
            <Botao  text='Seus produtos'/>
            <Botao  text='Compartilhe'/>
        </div>
        <div className={S.espaco}>

        </div>
    </header>
  )
}

export default Header