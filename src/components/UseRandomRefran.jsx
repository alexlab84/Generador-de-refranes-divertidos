const UseRandomRefran = (setRefran) => {
    const enLaCama = ' en la cama';
    const entreLasPiernas = ' entre las piernas';
  
    const arrayRefranes = [
      { parte1: 'Cuando el grajo vuela bajo, ', parte2: ' hace un frío del carajo' },
      { parte1: 'No por mucho madrugar, ', parte2: ' amanece más temprano' },
      { parte1: 'A Dios rogando, ', parte2: ' y con el mazo dando' },
      { parte1: 'Cuando marzo mayea, ', parte2: ' mayo marcea' },
      { parte1: 'En Abril, ', parte2: ' aguas mil' },
      { parte1: 'Perro ladrador, ', parte2: ' poco mordedor' },
      { parte1: 'Tira la piedra, ', parte2: ' y esconde la mano' },
      { parte1: 'A palabras necias, ', parte2: ' oídos sordos' },
      { parte1: 'Donde fueres, ', parte2: ' haz lo que vieres' },
      { parte1: 'Quien mucho abarca, ', parte2: ' poco aprieta' }
    ];
  
    // Función que genera un refrán aleatorio
    const getRandomRefran = () => {
      const randomIndex = Math.floor(Math.random() * arrayRefranes.length);
      const selectedRefran = arrayRefranes[randomIndex];
      const refranDivertido = `${selectedRefran.parte1}${enLaCama}, ${selectedRefran.parte2}${entreLasPiernas}`;
      setRefran(refranDivertido);
    };
  
    return getRandomRefran;
  };
  
  export default UseRandomRefran;
  