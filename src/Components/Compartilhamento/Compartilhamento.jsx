import React from 'react'
import S from './Compartilhamento.module.css'
import Botoes from '../Botoes/Botoes'
const Compartilhamento = () => {
  return (
    <section>
        <h2>Compartilhe a novidade</h2>
        <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <label htmlFor="text">Nome do seu amigo: <input type="text" /></label>
        <label htmlFor="email">E-mail: <input type="text" /></label>
        <Botoes text='Enviar agora'/>
    </section>
  )
}

export default Compartilhamento