import React from 'react';
import Form from '../../Components/Form/Form';
import S from './Main.module.css';
import Cards from '../../Components/Cards/Cards';
import Botoes from '../../Components/Botoes/Botoes';
import Compartilhamento from '../../Components/Compartilhamento/Compartilhamento';
import Footer from '../../Components/Footer/Footer';
const Main = () => {
  return (
    <div>
        <section className={S.section1}>
            <section className={S.sectionA}>
                <h2>Ajude o algorítimo a ser mais certeiro</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
            </section>
            <Form />
        </section>
        <section className={S.sectionB}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Botoes text='Ainda mais produtos aqui!'/>
        </section>
        <Compartilhamento />
        <Botoes text='Enviar agora'/>
        <Footer />
    </div>
  )
}

export default Main