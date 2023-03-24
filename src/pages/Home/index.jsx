import React, { useState } from 'react';
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState();


  return (
    <div className='container'>
      <h1>Lista de presença: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome ..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Henrique" time="07:37:47" />
      <Card name="Karen" time="08:55:57" />
      <Card name="Sophia" time="09:25:57" />


    </div>
  )
}


