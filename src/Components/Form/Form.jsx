import React from 'react'

const Form = () => {
  return (
    <form action="">
        <label htmlFor="text">Seu nome: <input type="text" /></label>
        <label htmlFor="email">Seu e-mail: <input type="text" /></label>
        <label htmlFor="cpf">CPF:<input type="number" /></label>
        <label htmlFor=""><input type='radio' name='fem' />Feminino</label>
        <label htmlFor=""><input type='radio' name='mas' />Masculino</label>
    </form>
  )
}

export default Form