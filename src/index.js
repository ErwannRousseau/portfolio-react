// == Import : npm
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';

// == Import : local
// Composants
import App from 'src/components/App/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
