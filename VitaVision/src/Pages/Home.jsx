import React, { useState, useEffect } from 'react';

function Home () {
  const images = [
    '../Images/Home2.png',
    '../Images/Home3.png',
    '../Images/Home4.png',
    '../Images/Home5.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex +1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img 
            src={images[currentImageIndex]} id="carousel"
            alt="Carousel" 
          />
        </div>
        <div className="col">
        <br></br>
        <img src="./Images/Logo.png" alt="Logo" width="75" height="75" className="me-2" />
        <h1><b>VitaVision AI-ris</b></h1>
        <hr id="line" />
        <h3>Detección Temprana de Glaucoma con Inteligencia Artificial</h3>
        <br></br>
        <h5 align="left" id="h5">El glaucoma es una de las principales causas de ceguera en el mundo, 
          pero con un diagnóstico oportuno, se puede prevenir su progresión. 
          En <b>VitaVision - AIris</b>, utilizamos inteligencia artificial avanzada 
          para analizar imágenes del fondo del ojo y detectar signos tempranos de 
          glaucoma en cuestión de segundos.</h5>

        </div>
    </div>
    </div>
  );
};
  export default Home;