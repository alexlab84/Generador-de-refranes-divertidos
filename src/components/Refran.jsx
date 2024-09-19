import PropTypes from 'prop-types';

function Refran({ refran }) {
    return (
      <>
        {/* Mostrar el refrán solo si se ha generado uno */}
        {refran && <p className='refran'>{refran}</p>}
      </>
    );
  }

  Refran.propTypes = {
    refran: PropTypes.string.isRequired
  };
  
  export default Refran;
  
