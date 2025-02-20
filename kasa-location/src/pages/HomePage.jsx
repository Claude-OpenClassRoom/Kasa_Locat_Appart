// Importation des hooks et composants nécessaires depuis React et leurs chemins relatifs
//import { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import HousingCard from '../components/HousingCard/HousingCard';

// Définition de l'image de la bannière pour la page d'accueil
const homeBannerImg = './images/banner-kasa-home.webp';

// Déclaration du composant fonctionnel HomePage
const HomePage = () => {
  // Utilisation de useEffect pour mettre à jour le titre de la page lorsque le composant est monté


  // Retourne le rendu JSX de la page d'accueil
  return (
    <>
      {/* Utilisation du composant Banner avec les props imageUrl, title et overlayOpacity */}
      <Banner
        imageUrl={homeBannerImg}
        title="Chez vous, partout et ailleurs"
        overlayOpacity={0.6}
      />
      {/* Utilisation du composant HousingCard sans props supplémentaires */}
      <HousingCard />
    </>
  );
};

// Exportation du composant HomePage pour utilisation dans d'autres parties de l'application
export default HomePage;
