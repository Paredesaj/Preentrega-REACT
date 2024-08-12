import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuienesSomosContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;

  button {
    background-color: orange;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-family: Arial, sans-serif;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 2rem;

    &:hover {
      background-color: darkorange;
    }
  }
`;

function QuienesSomos() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <QuienesSomosContainer>
      <h1>Quienes somos</h1>
      <p>Comenzamos el 5 de Diciembre de 1977 como una pequeña empresa familiar abriendo nuestra primera tienda en la esquina de Rivera y Soca, en Montevideo. Actualmente y después de todos estos años contamos con 30 locales en varios puntos del Uruguay y la familia Stadium hoy está compuesta por más de 500 personas.</p>
      <p>Ofrecemos las marcas más reconocidas del mercado, tanto nacionales como internacionales y nos enorgullece distinguirnos por la atención que brindamos a nuestros clientes.</p>
      <p>Desde marzo de 2006 somos pioneros en ventas por internet, en nuestra web encontrarás miles de productos y una atención personalizada y humana, en una plataforma web moderna, rápida y 100% segura.</p>
      <p>Todo esto para estar más cerca tuyo y que accedas a las mejores promociones desde la comodidad de tu hogar.</p>
      
      <h2>Visión</h2>
      <p>Ser la empresa líder del mercado en el rubro de calzado en Uruguay.</p>
      <p>Perseguir la excelencia en el servicio a nuestros clientes y ser reconocidos por clientes, proveedores y colaboradores como una empresa honesta, seria, comprometida y humana.</p>
      <p>Ser un buen lugar para trabajar y crear relaciones duraderas.</p>
      
      <h2>Misión</h2>
      <p>Brindar la mayor variedad de calzado tanto para niños, damas, hombres, en un proceso de mejora continua en la calidad de los productos, ofreciendo la mejor experiencia de compra y una atención personalizada.</p>

      <button onClick={handleBackToHome}>Volver al inicio</button>
    </QuienesSomosContainer>
  );
}

export default QuienesSomos;
