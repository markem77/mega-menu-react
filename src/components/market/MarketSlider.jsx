import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./marketslider.css";
import React, { useState, useEffect } from "react";


function MarketSlider({ items, CardComponent, containerClass = "" }) {

  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 768); // Masquer les flèches si la largeur de l'écran est <= 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Exécute une fois pour définir l'état initial
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: showArrows,
    responsive: [
      { breakpoint: 1270, settings: { slidesToShow: 3 } },
      { breakpoint: 852, settings: { slidesToShow: 2 } },
      { breakpoint: 749, settings: { slidesToShow: 3, infinite: true,} },
    ],
  };


  return (
    <div className={`caroussel_cont ${containerClass}`}>
      <Slider {...settings}>
        {items.map((item) => (
          <div className="marketcont" key={item.id}>
            {/* Utilisation dynamique du composant */}
            <CardComponent market={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MarketSlider;
