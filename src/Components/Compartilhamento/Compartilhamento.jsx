import React from 'react'

const Compartilhamento = () => {
  return (
    <section>
        <h2>Compartilhe a novidade</h2>
        <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <label htmlFor="text">Nome do seu amigo: <input type="text" /></label>
        <label htmlFor="email">E-mail: <input type="text" /></label>
    </section>
  )
}

export default Compartilhamento