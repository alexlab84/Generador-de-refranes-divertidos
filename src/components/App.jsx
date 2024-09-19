
import { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Refran from './Refran.jsx';
import UseRandomRefran from './UseRandomRefran';
import '../styles/App.scss';

function App() {
  const [refran, setRefran] = useState('');

  // Obtener la función para generar refranes desde el hook personalizado
  const getRandomRefran = UseRandomRefran(setRefran);

  return (
    <>
      <div className='container'>
      <Header />
      <Button getRandomRefran={getRandomRefran} />
      
      
      <Refran refran={refran} />

      </div>
    </>
  )
}

export default App;
