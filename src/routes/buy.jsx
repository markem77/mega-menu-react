import { useState, useEffect } from "react";
import Hero from '../components/hero/Hero';
import Minheader from './Minheader';
import MarketSlider from '../components/market/MarketSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Chart from '../components/Chart/Chart';
import MarketCard from "../components/market/MarketCard";
import CustomCard from '../components/custom_card/CustomCard';
import Stock_card from '../components/stock_card/Stock_card';
import Stock_Grid from '../components/stock_card2/Stock_Grid';
import img1 from "/src/assets/images/img1.jpeg"
import img2 from "/src/assets/images/img2.jpg"
import img3 from "/src/assets/images/img3.png"
import img4 from "/src/assets/images/img4.jpg"
import img5 from "/src/assets/images/img5.jpg"
import img6 from "/src/assets/images/img6.png"
import img7 from "/src/assets/images/img7.jpg"
import img8 from "/src/assets/images/img8.png"
import logo1 from "/src/assets/images/logo1.png"
import logo2 from "/src/assets/images/logo2.png"
import logo3 from "/src/assets/images/logo3.png"
import logo4 from "/src/assets/images/logo4.jpg"



const BuyPage = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 749); // Détecte la taille de l'écran
    };

    handleResize(); // Vérifie la taille dès le premier rendu
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


    const marketLinks = [
      { label: "Indices", href: "#" },
      { label: "Actions", href: "#" },
      { label: "ETFs", href: "#" },
      { label: "Crypto", href: "#" },
      { label: "Forex", href: "#" },
      { label: "Contrats à terme", href: "#" },
    ];
  
    const section1 = [
      { label: "Choix de la rédaction", href: "#" },
      { label: "Pour vous", href: "#" },
      { label: "Suivi(e)", href: "#" },
      { label: "Populaires", href: "#" },
    ];

    const section2 = [
      { label: "Choix de la rédaction", href: "#" },
      { label: "Suivi(e)", href: "#" },
      { label: "Populaires", href: "#" },
    ];
  
    const marketItems = [
      { id: 1, symbol : "14", name: "CAC 40", value: "$75.34", change: "+1.23" },
      { id: 2,symbol : "28", name: "DAX", value: "$125.70", change: "-0.45" },
      { id: 3, symbol : "81",name: "NASDAQ", value: "$300.15", change: "+2.56" },
    ];

    const marketItems1 = [
      { id: 1, title: "GLE", subtitle: "SOCIETE GENERALE", logoUrl: logo1, price: 145, currency: "EUR", change: +1.23 }, // Exemple de variation positive
      { id: 2, title: "MC", subtitle: "LVMH", logoUrl: logo2, price: 721, currency: "EUR", change: -0.45 }, // Exemple de variation négative
      { id: 3, title: "AC", subtitle: "ACCOR", logoUrl: logo3, price: 14544, currency: "EUR", change: +2.56 }, // Exemple de variation positive
      { id: 4, title: "ACA", subtitle: "CREDIT AGRICOLE", logoUrl: logo4, price: 4587, currency: "EUR", change: +0.89 } // Exemple de variation positive
    ];
    

    const customItems = [
      { id: 1, title: "Forex", description: "Analyse des paires de devises", imageUrl: img1, author: "Auteur 5", time: "12h", comments: 12, likes: 25  },
      { id: 2, title: "Crypto", description: "Bitcoin et Ethereum", imageUrl: img2, author: "Auteur 5", time: "12h", comments: 12, likes: 42 },
      { id: 3, title: "Actions", description: "Investissement en actions", imageUrl: img3, author: "Auteur 5", time: "12h", comments: 12, likes: 13 },
      { id: 4, title: "Actions", description: "Investissement en espece", imageUrl: img4, author: "Auteur 5", time: "12h", comments: 12, likes: 28 },
   ];

   const customItems1 = [
    { id: 1, title: "Scater Plot", description: "Analyse des paires de devises", imageUrl: img5, author: "Auteur 5", time: "12h", comments: 12, likes: 25  },
    { id: 2, title: "Market Stats Panel", description: "Bitcoin et Ethereum", imageUrl: img6, author: "Auteur 6", time: "17h", comments: 10, likes: 42 },
    { id: 3, title: "HtfCandlesLib", description: "Investissement en actions", imageUrl: img7, author: "Auteur 7", time: "15h", comments: 19, likes: 13 },
    { id: 4, title: "Elhers Loops [BigBeluga]", description: "Investissement en espece", imageUrl: img8, author: "Auteur 8", time: "18h", comments: 54, likes: 28 },
 ];

    
  return (
    <Hero>
      <Minheader
        title="Résumé des marchés"
        links={marketLinks}
         className="minhead-flex"
      />
      <MarketSlider items={marketItems}
       CardComponent={MarketCard}/>

       {!isMobile && (
        <Chart isMobile={false} hideInDesktop={false} />
      )}

      <Minheader
        title="Idées de la communauté"
        links={section1}
        sliderSettings={{
          slidesToShow: 4,
          infinite: false, // Désactive le défilement infini
        }}
      />
      
      <MarketSlider items={customItems}
       CardComponent={CustomCard}
       containerClass="custom-slider-secondary"/>
       <Minheader
        title="Indicateurs de stratégies"
        links={section2}
        sliderSettings={{
          slidesToShow: 4,
          infinite: false, // Désactive le défilement infini
        }}
      />
      <MarketSlider items={customItems1}
       CardComponent={CustomCard}
       containerClass="custom-slider-secondary"/>
       
       <Minheader
        title="Tendances communautaires"
        links={section2}
        sliderSettings={{
          slidesToShow: 4,
          infinite: false, // Désactive le défilement infini
        }}
      />
       <MarketSlider items={ marketItems1}
       CardComponent={Stock_card}
       containerClass="custom-slider-third"/>

        <Minheader
        title="Actions à plus fort volume"
        links={section2}
        sliderSettings={{
        slidesToShow: 4,
        infinite: false, // Désactive le défilement infini
        }}
      />
       <Stock_Grid />
    </Hero>
  );
};

export default BuyPage;
