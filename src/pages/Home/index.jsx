import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome ..." />
      <button type="button">Adicionar</button>

      <Card name="Henrique" time="07:37:47" />
      <Card name="Karen" time="08:55:57" />
      <Card name="Sophia" time="09:25:57" />


    </div>
  )
}


