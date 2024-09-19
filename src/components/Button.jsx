import PropTypes from 'prop-types';


function Button({ getRandomRefran }) {
    return (
      <button className='btn' onClick={getRandomRefran}>
        Generar refrán divertido
      </button>
    );
  }

  Button.propTypes = {
    getRandomRefran: PropTypes.func.isRequired
  };
  
  export default Button;
  