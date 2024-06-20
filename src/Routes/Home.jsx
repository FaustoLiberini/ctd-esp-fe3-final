import React, { useContext } from 'react';
import { ContextGlobal } from '../utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const {state} = useContext(ContextGlobal);
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <main  className={themeClass}>
      <h1>Home</h1>
      <div className='card-grid'>
      {state.data.map(dentista => (
        <Card 
          key={dentista.id} 
          id={dentista.id} 
          name={dentista.name} 
          username={dentista.username} 
        />
      ))}
      </div>
    </main>
  )
}

export default Home