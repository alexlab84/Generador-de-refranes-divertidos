import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const enLaCama = ' en la cama';
  const entreLasPiernas = ' entre las piernas';

  const arrayRefranes = [ 
    {
      parte1: 'Cuando el grajo vuela bajo, ',
      parte2: ' hace un frío del carajo,'
    },
    {
      parte1: 'No por mucho madrugar, ',
      parte2: ' amanece más temprano,'
    },
    {
      parte1: 'A Dios rogando, ',
      parte2: ' y con el mazo dando,'
    },
    {
      parte1: 'Cuando marzo mayea, ',
      parte2: ' mayo marcea,'
    },
    {
      parte1: 'En Abril, ',
      parte2: ' aguas mil,'
    },
    {
      parte1: 'Perro ladrador, ',
      parte2: ' poco mordedor,'
    },
    {
      parte1: 'Tira la piedra, ',
      parte2: ' y esconde la mano,'
    },
    {
      parte1: 'A palabras necias, ',
      parte2: ' oídos sordos,'
    },
    {
      parte1: 'Donde fueres, ',
      parte2: ' haz lo que vieres,'
    },
    {
      parte1: 'Quien mucho abarca, ',
      parte2: ' poco aprieta,'
    }
  ];

  const [refran, setRefran] = useState('');

  const getRandomRefran = () => {
    const randomIndex = Math.floor(Math.random() * arrayRefranes.length);
    const selectedRefran = arrayRefranes[randomIndex];
    // Concatenar con 'en la cama' y 'entre las piernas'
    const refranDivertido = `${selectedRefran.parte1}${enLaCama}, ${selectedRefran.parte2}${entreLasPiernas}`;
    setRefran(refranDivertido); // Actualizar el estado con el refrán
  };

  return (
    <>
      <div className='container'>
      <h1 className='title'>Generador de refranes divertidos</h1>
      <p className='paragraph'>¿Sabías que si en cualquier refrań del refranero español pones "en la cama" al final de la primera parte y "entre las piernas" al final de la segunda te queda un refrán mucho más divertido?</p>
      <p className='paragraph'>¡Pruébalo tú mismo!</p>
      {/* Botón para generar refrán */}
      <button className='btn' onClick={getRandomRefran}>
          Generar refrán divertido
        </button>
      {/* Mostrar el refrán generado */}
      {refran && <p className='refran'>{refran}</p>}

      </div>
    </>
  )
}

export default App;
