import React from 'react'
import S from './Botoes.module.css'

const Botoes = ({text}) => {
  return (
    <button className={S.btn}>{text}</button>
  )
}

export default Botoes