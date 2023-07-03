import { NavLink } from 'react-router-dom';

/* eslint-disable max-len */
function Privacy() {
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight });
  };
  return (
    <article className="flex flex-col text-[#ccd6f6] w-full h-full 2xl:h-[100dvh] px-6 mt-6">
      <div className="min-[1160px]:absolute mb-6 active:translate-x-px active:translate-y-0.5">
        <NavLink
          to="/"
          onClick={handleScrollToBottom}
          className="inline-flex items-center px-4 py-2 bg-[#e83e8c] hover:bg-[#e83e8dbb] text-white text-sm font-medium rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          Retour
        </NavLink>
      </div>
      <div className="max-w-[900px] flex flex-col justify-center h-full mx-auto mb-10">
        <h2 className="text-4xl font-bold inline border-b-4 border-b-[#e83e8c] border-solid mb-4 max-w-fit">
          Confidentialité
        </h2>
        <p>
          Je tiens à préserver la confidentialité de vos données personnelles lorsque vous visitez mon portfolio. Cette
          politique de confidentialité a pour but de vous informer sur la manière dont je collecte, utilise, partage et
          protège les informations que vous me fournissez via le formulaire de contact.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Collecte d'informations</h3>
        <p>
          Lorsque vous utilisez le formulaire de contact sur mon portfolio, je peux collecter certaines informations
          personnelles, telles que votre nom, votre prénom et votre adresse e-mail. Ces informations me sont fournies
          volontairement par vous et je les utilise uniquement dans le but de répondre à vos demandes et de vous fournir
          les informations ou les services que vous avez sollicités.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Utilisation des informations</h3>
        <p>
          Les informations personnelles que vous me fournissez via le formulaire de contact sont utilisées uniquement
          dans le cadre de la communication et de l'interaction avec vous. Je ne les utilise pas à d'autres fins, telles
          que l'envoi de newsletters ou la promotion de produits ou services, sauf si vous me donnez votre consentement
          explicite à cet égard.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Partage des informations</h3>
        <p>Je ne partage pas vos informations personnelles avec des tiers, sauf dans les cas suivants :</p>
        <ul>
          <li>
            Lorsque cela est nécessaire pour répondre à votre demande ou pour fournir les services que vous avez
            sollicités.
          </li>
          <li>
            Lorsque je suis légalement tenu de le faire, en réponse à une demande légale ou pour protéger mes droits
            légaux.
          </li>
        </ul>
        <h3 className="text-2xl font-bold mt-4 mb-2">Sécurité des données</h3>
        <p>
          Je prends des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès
          non autorisé, toute divulgation, toute altération ou toute destruction. Cependant, veuillez noter qu'aucune
          méthode de transmission de données sur Internet ou de stockage électronique n'est totalement sécurisée. Je ne
          peux donc garantir la sécurité absolue de vos informations.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Liens externes</h3>
        <p>
          Mon portfolio peut contenir des liens vers des sites externes pertinents. Veuillez noter que je n'ai aucun
          contrôle sur le contenu ou les pratiques de confidentialité de ces sites. Je vous encourage à consulter les
          politiques de confidentialité de ces sites avant de fournir vos informations personnelles.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Modification de la politique de confidentialité</h3>
        <p>
          Je me réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera
          publiée sur cette page avec une indication de la date de mise à jour. Je vous invite à consulter régulièrement
          cette page pour prendre connaissance des éventuelles modifications.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Contact</h3>
        <p>
          Si vous avez des questions concernant la politique de confidentialité ou si vous souhaitez exercer vos droits
          en matière de protection des données, veuillez me contacter à cette adresse email :{' '}
          <a href="mailto:erwann.rousseau@icloud.com" className="text-[#e83e8c]">
            erwann.rousseau@icloud.com
          </a>
        </p>
      </div>
    </article>
  );
}

export default Privacy;
