import React from 'react';

function Boton(props) {
  const { text, url } = props;

  const redireccionar = () => {
    window.location.href = url;
  };

  return (
    <button className='Btn' onClick={redireccionar}>{text}</button>
  );
}

export default Boton;

