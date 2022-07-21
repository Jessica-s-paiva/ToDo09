import React from 'react'
import Botoes from '../Botoes/Botoes'
import S from './Form.module.css'
const Form = () => {
  return (
    <form action="">
        <label htmlFor="text">Seu nome: <input type="text" /></label>
        <label htmlFor="email">Seu e-mail: <input type="text" /></label>
        <label htmlFor="cpf">CPF:<input type="number" /></label>
        <label htmlFor=""><input type='radio' name='gender' />Feminino</label>
        <label htmlFor=""><input type='radio' name='gender' />Masculino</label>
        <Botoes text='Enviar'/>
    </form>
  )
}

export default Form