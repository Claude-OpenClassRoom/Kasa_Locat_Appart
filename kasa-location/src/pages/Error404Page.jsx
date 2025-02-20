// Importation des hooks et composants nécessaires depuis 'react' et 'react-router-dom'
//import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Error404Page() {
  // Hook de navigation pour rediriger l'utilisateur vers une autre route
 // const navigate = useNavigate();



  return (
    // Conteneur principal de la page 404 avec une classe CSS pour le style
    <div className="error404">
      {/* Titre principal affichant le code d'erreur 404 */}
      <h1>404</h1>
      {/* Message informant l'utilisateur que la page demandée n'existe pas */}
      <p>Oups! La page que vous demandez n'existe pas.</p>
      {/* Lien permettant à l'utilisateur de retourner à la page d'accueil */}
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

// Exportation du composant pour qu'il puisse être utilisé ailleurs dans l'application
export default Error404Page;
