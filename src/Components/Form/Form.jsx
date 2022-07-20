import React from 'react'
import Botoes from '../Botoes/Botoes'
import S from './Form.module.css'
const Form = () => {
  return (
    <form action="">
        <label htmlFor="text">Seu nome: <input type="text" /></label>
        <label htmlFor="email">Seu e-mail: <input type="text" /></label>
        <label htmlFor="cpf">CPF:<input type="number" /></label>
        <label htmlFor=""><input type='radio' name='fem' />Feminino</label>
        <label htmlFor=""><input type='radio' name='mas' />Masculino</label>
        <Botoes text='Enviar'/>
    </form>
  )
}

export default Form