import React from 'react'
import Slider from "react-slick"; // Importer react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./styles/minheader.css"; // Pour des styles personnalisés si nécessaire


// Composant minheader
function Minheader({ title, links, sliderSettings, className }) {
  // Configuration du carrousel
  const defaultSettings = {
    infinite: true, // Permet de défiler indéfiniment
    speed: 500, // Vitesse de défilement
    slidesToShow: 6, // Nombre d'éléments visibles à la fois
    slidesToScroll: 1, // Nombre d'éléments à faire défiler à chaque fois
    arrows: null, // Affiche les flèches de navigation
    responsive: [
      {
        breakpoint: 1200, // Lorsque l'écran est plus petit que 1024px
        settings: {
          slidesToShow: 5, // Affiche 2 éléments
        },
      },
      {
        breakpoint: 600, // Lorsque l'écran est plus petit que 600px
        settings: {
          slidesToShow: 3, // Affiche 1 élément
        },
      },
      {
        breakpoint: 457, // Lorsque l'écran est plus petit que 600px
        settings: {
          slidesToShow: 3, // Affiche 1 élément
        },
      },
    ],
  };

  const settings = { ...defaultSettings, ...sliderSettings }; // Fusion des paramètres par défaut et personnalisés


  return (
    <div className={`minheader_cont ${className}`}>
    <h1>
      {title}<code>&gt;</code>
    </h1>
    <div className="minheader_nav">
      <Slider {...settings}>
        {links.map((link, index) => (
          <div className="slide-link" key={index}>
            <a href={link.href}>{link.label}</a>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);
}

export default Minheader

