import React from 'react'
import Botoes from '../Botoes/Botoes'
import S from './Form.module.css'
const Form = () => {
  return (
    <form action="" className={S.forms}>
        <label htmlFor="text" className={S.nome}>Seu nome: <input type="text" /></label>
        <label htmlFor="email" className={S.nome}>Seu e-mail: <input type="text" /></label>
        <label htmlFor="cpf"className={S.nome}>CPF:<input type="number" /></label>
          <div className={S.genero}>
            <label htmlFor= "" ><input type='radio' name='gender' />Feminino</label>
            <label htmlFor= "" ><input type='radio' name='gender' />Masculino</label>
          </div>
        <Botoes text='Enviar'/>
    </form>
  )
}

export default Form